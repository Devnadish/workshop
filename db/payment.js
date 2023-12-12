"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export const savePaymentVoucher = async () => {
   const NewDocId=AddPaymentCounter();
  // Use the updatedPayment variable to access the updated payment value
  return NewDocId;
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
