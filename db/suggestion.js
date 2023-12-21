"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function addSuggestion(data) {
  try {
    // Check if the CarNo already exists for another client

    const comment = await db.suggestion.create({ data });
    revalidatePath("/");
    return {
      msg: "نشكر اهتمامك ... تم ارسال الاقتراح شكرا",
    };
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}
