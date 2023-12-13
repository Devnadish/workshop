"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const savePaymentVoucher = async (formData) => {
  try {
    const newDocId = await AddPaymentCounter();
    const docDate = new Date(formData.docDate).toISOString();
    const data = { ...formData, paymentId: newDocId, docDate };
    const newVoucher = await db.PaymentVoucher.create({ data });
    console.log(newVoucher);
    return newVoucher;
  } catch (error) {
    console.error("Error saving payment voucher:", error);
    throw error;
  }
};


export const AddPaymentCounter = async () => {
  let updatedPayment;

  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();

  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { payment: existingRecord.payment + 1 },
    });

    updatedPayment = existingRecord.payment + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { payment: 1 } });

    updatedPayment = newRecord.payment;
  }

  // Use the updatedPayment variable to access the updated payment value
  return updatedPayment;
};

export const AddFixingOrderCounter = async () => {
  let updatedPayment;

  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();

  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { fixing: existingRecord.fixing + 1 },
    });

    updatedPayment = existingRecord.fixing + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { fixing: 1 } });

    updatedPayment = newRecord.fixing;
  }

  // Use the updatedPayment variable to access the updated payment value
  return updatedPayment;
};

export async function getAllExpencies() {
  const Getexp = await db.Expence.findMany({});
  console.log(Getexp);

  // Extract the expName property from each expense object
  const expNames = Getexp.map((exp) => exp.expName);

  return expNames;
}

export async function addCategory(categoryName) {
  console.log(categoryName);
  // Check if the category already exists
  const existingCategory = await db.Expence.findMany({
    where: {
      expName: categoryName,
    },
  });

  // If the category exists, return a message
  if (existingCategory.length !== 0) {
    return "Category already exists";
  }
  console.log(categoryName);

  // If the category doesn't exist, create a new category
  const newCategory = await db.Expence.create({
    data: {
      expName: categoryName,
    },
  });
  return "Category added successfully";
  console.log("first");
}
