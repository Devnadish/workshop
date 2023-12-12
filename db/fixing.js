"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AddRecietCounter } from "./reciet";

export async function newFixingOrder(fixingData) {
  try {
    // check if the maintenance exisit>>>>>>>>
    const checkOpenOrder = await CheckOpenFixingOrder(fixingData.selectedCar);
    if (checkOpenOrder) {
      return {
        msg: "لا يمكن فتح كرت صيانة لسيارة مفتوح لها كرت مسبقا يجب اغلاق الكرت السابق..",
        exisit: true,
      };
    }
    // // end of check >>>>>>>>>>>>>>>>>

    const fixCounter = await AddFixingCounter();
    const data = { ...fixingData, fixingId: fixCounter };
    const order = await db.fixingOrder.create({ data });
    const addToCarsInClient = await addFixCardValue(  order.clientId,  order.selectedCar );
    const addToOpenOrder = await createOpenFixingOrder(data);
    const addReciptVoucher = await createReciptVocher(data);
console.log(addReciptVoucher);
    return {
      msg: `تم انشاء الكرت بنجاح وتم انشاء سند قبض بقيمة  ${data.total} ريال سعودي`,
      cardNo: fixCounter,
      client: fixingData.clientName,
      total: fixingData.total,
      voucher: addReciptVoucher.voucher,
      notifcation: [ addToCarsInClient, addToOpenOrder, addReciptVoucher ],
    };
  } catch (error) {
    console.error("Error creating fixing order:", error);
    return { err: error.message };
    throw new Error("Failed to create fixing order: " + error.message);
  }
}

export const AddFixingCounter = async () => {
  let fixCounter;
  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();
  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { fixing: existingRecord.fixing + 1 },
    });

    fixCounter = existingRecord.fixing + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { fixing: 1 } });

    fixCounter = newRecord.fixing;
  }

  // Use the fixCounter variable to access the updated payment value
  return fixCounter;
};

async function addFixCardValue(clientIdNo, newFixCardValue) {

  // Retrieve the client by ID
  const clientId = parseInt(clientIdNo);
  const client = await prisma.client.findUnique({
    where: { clientIDs: clientId },
  });

  // Check if the client exists
  if (client) {
    // Access the fixCard array
    const fixCardArray = client.fixCard || [];

    // Check if the newFixCardValue already exists in the fixCard array
    if (fixCardArray.includes(newFixCardValue)) {
      // Return a message to the UI indicating that the value already exists
      return "The value already exists in the fixCard array.";
    } else {
      // Push the new value to the fixCard array
      fixCardArray.push(newFixCardValue);

      // Update the client with the updated fixCard array
      await prisma.client.update({
        where: { clientIDs: clientId },
        data: { fixCard: { set: fixCardArray } },
      });

      // Return the updated fixCard array
      return "The value Added succsufly to cliet array..";
    }
  } else {
    // Return an empty array if the client doesn't exist
    return "I can Not Rach the Client Data..";
  }
}

async function createOpenFixingOrder(cardData) {
  // Check if the openFixingOrder already exists
  const selectedCar =cardData.selectedCar
  const clientId =cardData.clientId
  const clientName =cardData.clientName
  const fixOrederId = cardData.fixingId;
  const fixOrederAmt =cardData.total
  const data={selectedCar,clientId,clientName,fixOrederId,fixOrederAmt}

  const existingOrder = await prisma.openFixingOrder.findUnique({
    where: { selectedCar },
  });

  // If the order already exists, return true
  if (existingOrder) {
    return true;
  }

  // Create a new openFixingOrder
  const newOrder = await prisma.openFixingOrder.create({ data});

  // If the new order is created successfully, return false
  if (newOrder) {
    return "Order Added To onProggress Data ..";
  }
}
async function CheckOpenFixingOrder(selectedCar) {
  // Check if the openFixingOrder already exists

  const existingOrder = await prisma.openFixingOrder.findUnique({
    where: { selectedCar },
  });

  // If the order already exists, return true
  if (existingOrder) {
    return true;
  }
}



export async function createReciptVocher(Voucherdata) {
  const detail = "   مقابل امر اصلاح رقم " + Voucherdata.fixingId;
  const fromID = Voucherdata.clientId;
  const fromName = Voucherdata.clientName;
  const amount = Voucherdata.total;
  const fixingCode = Voucherdata.fixingId;
  try {
    const RecietCounter = await AddRecietCounter();
    // const data = { ...reciptData, recietId: RecietCounter };
    const data = {
      detail,
      fromID,
      fromName,
      amount,
      fixingCode,
      recietId: RecietCounter,
    };
    const order = await db.RecietVoucher.create({ data });
    return {msg:"Reciet Created Success WITH NO :" +  RecietCounter,voucher:RecietCounter}
  } catch (error) {
    console.error("Error creating fixing order:", error);
    throw new Error("Failed to create fixing order: " + error.message);
    return { err: error.message };
  }
}
