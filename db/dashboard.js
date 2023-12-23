"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// import nodeCache from "node-cache"; // Assuming you've installed the cache library

// const cache = new nodeCache();

export async function calculateSeparateSums() {
  try {
    const cachedSums = cache.get("fixingOrderSums");
    if (cachedSums) {
      return cachedSums;
    }

    const sums = await db.fixingOrder.aggregate({
      _group: {
        _id: { isClosed: "$isClosed" },
        totalSum: { _sum: "$total" },
        receiveSum: { _sum: "$receive" },
        discountSum: { _sum: "$discount" },
      },
    });

    // cache.set("fixingOrderSums", sums, 60 * 60); // Cache for 1 hour
    return sums;
  } catch (error) {
    console.error("Error calculating separate sums:", error);
    throw error; // Re-throw for further handling if needed
  }
}

export async function calculateOverallSums() {
  try {
    const sums = await db.$queryRaw`
      SELECT
        SUM(paymentAmount) AS totalPaymentSum,
        SUM(receiptAmount) AS totalReceiptSum
      FROM (
        SELECT amount AS paymentAmount FROM PaymentVoucher
        UNION ALL
        SELECT amount AS receiptAmount FROM RecietVoucher
      ) AS combined_amounts;
    `;

    return sums;
  } catch (error) {
    console.error("Error calculating overall sums:", error);
    throw error;
  }
}
// export async function calculateClientSums() {
//   const paymentVouchersByClientId = await db.paymentVoucher.groupBy({
//     by: ["fromName"], // Group by the integer "fromId" field (client identifier)
//     _sum: {
//       amount: true,
//     },
//   });

//   // Handle empty or invalid "fromId" values in application logic, if necessary

//   return paymentVouchersByClientId;
// }

// export async function calculateClientSums() {
//   const paymentVouchersByClientId = await db.paymentVoucher.groupBy({
//     by: ["fromID", "fromName"],
//     where: {
//       fromID: { gt: 0 },
//       paymentType: { equals: "fixing" }, // Filter by paymentType
//     },
//     _sum: {
//       amount: true,
//     },
//     select: {
//       fromID: true,
//       fromName: true,
//       _sum: true,
//     },
//   });

//   return paymentVouchersByClientId;
// }

export async function calculateClientSums() {
  const paymentVouchersByClientId = await db.paymentVoucher.groupBy({
    by: ["fromID", "fromName"],
    where: {
      fromID: { gt: 0 },
      paymentType: { equals: "fixing" },
    },
    _sum: {
      amount: true,
    },
    select: {
      fromID: true,
      fromName: true,
      _sum: true,
    },
  });

  // Extract "amount" from "_sum" and restructure results
  const formattedResults = paymentVouchersByClientId.map((result) => ({
    fromID: result.fromID,
    fromName: result.fromName,
    amount: result._sum.amount, // Extract "amount"
  }));

  return formattedResults;
}


export async function calculateClientRecipts() {
  const paymentVouchersByClientId = await db.RecietVoucher.groupBy({
    by: ["fromID", "fromName"],
    where: {
      fromID: { gt: 0 },

    },
    _sum: {
      amount: true,
    },
    select: {
      fromID: true,
      fromName: true,
      _sum: true,
    },
  });

  // Extract "amount" from "_sum" and restructure results
  const formattedResults = paymentVouchersByClientId.map((result) => ({
    fromID: result.fromID,
    fromName: result.fromName,
    amount: result._sum.amount, // Extract "amount"
  }));

  return formattedResults;
}
