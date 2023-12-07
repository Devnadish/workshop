"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";


// Add a new client to the database
export async function addClient(client) {
  const result = await db.client.create({
    data: client
  });
  revalidatePath("/dashboard/clients/display");
  // revalidatePath("/blog");
  return result;
}

// Delete a client from the database
export async function deleteClient(id) {
  const result = await db.client.delete({
    where: {
      id: id
    }
  });
  return result;
}

// Update a client in the database
export async function updateClient(id, client) {
  const result = await db.client.update({
    where: {
      id: id
    },
    data: client
  });
  return result;
}

// Show all clients in the database
export async function getAllClients() {
  const result = await db.client.findMany();
  return result;
}


export async function checkClientExists(phone) {
  const existingClient = await db.client.findUnique({
    where: {
      mobile: phone,
    },
  });

  if (existingClient) {
     return existingClient.name;
  }
}
