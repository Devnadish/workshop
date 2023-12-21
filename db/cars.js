"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function AddNewCar(Car) {
  try {
    // Check if the CarNo already exists for another client
    const existingCar = await db.Car.findFirst({
      where: {
        CarNo: Car.CarNo,
        // clientId: { not: Car.clientId }, // Exclude the current client
      },
    });

    if (existingCar) {
      return "رقم اللوحة  يخص   لعميل اخر";
    }

    const carDb = await db.Car.create({ data: Car });
    return "تمت اضافة السيارة  للعميل بنجاح";
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}
