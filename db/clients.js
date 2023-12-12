"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function addClient(client) {
  try {
    const check = await checkClientExists(client.mobile);

  if (check) {
    return {
      msg:`العميل موجود مسبقا باسم   ${check.cName} ورقم ${check.cId}`,client:check.client,
      check
    }
  }



    const ClientCounter = await AddClientCounter();
    const data = { ...client, clientIDs: ClientCounter };
    const result = await db.client.create({ data });
    revalidatePath("/dashboard/clients/display");
    return {
      msg: "تم تأسيس كرت للعميل بنجاح ",
      clientId: ClientCounter,
    };
  } catch (error) {
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("Car_CarNo_key")
    ) {
      return {
        msg: "رقم اللوحة  مسجلة باسم عميل اخر.",
      };

    }
    console.error(error);
    // Handle error appropriately
  }
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
// export async function getAllClients() {
//   const result = await db.client.findMany();
//   return result;
// }


export async function getAllClients() {
  try {
    const clients = await db.client.findMany();
    const clientsWithCars = await Promise.all(
      clients.map(async (client) => {
        const carsData = await db.Car.findMany({
          where: {
            CId: client.id,
          },
        });
            revalidatePath("/dashboard/clients/display");
        return { ...client, carsData };
      })
    );
    return clientsWithCars;
  } catch (error) {
    console.error(error);
    return "An error occurred while retrieving clients and their cars";
  }
}




export async function checkClientExists(phone) {
  const existingClient = await db.client.findUnique({
    where: {
      mobile: phone,
    },
  });

  if (existingClient) {
     return {cName:existingClient.name,cId:existingClient.clientIDs}
  }
}

export async function gerClientByIdForFixing(Cid) {
  try {
    // const clientId = 4
    const existingClient = await db.client.findUnique({
      where: {
        clientIDs: parseInt(Cid),
      },
    });
    if (!existingClient) {
      return { msg: "العميل غير موجود",stuts:"NotExisit" };
    }
    const existingCars = await db.Car.findMany({
      where: {
        clientId: parseInt(Cid),
      },
    });





    return {client:existingClient,cars: existingCars}
  } catch (error) {
    console.error(error);
    return { msg: "حدث خطأ أثناء استرجاع المعلومات" };
  }
}












export async function checkClientByIDExists(Cid) {
  const clientId = parseInt(Cid); // Convert string to integer
  const existingClient = await db.client.findMany({
    where: {
      clientIDs: clientId,
    },
  })



  if (existingClient[0]) {
    return {
      name: existingClient[0].name,
      id: existingClient[0].id,
      cars: existingClient[0].cars,
    };
  }
}
;


// Show all clients in the database where the user balance =0
export async function getZeroBalance() {
  const result = await db.client.findMany({where: {balance:0}});
  return result;
}

export async function getClientsWithPositiveBalance() {
  const result = await db.client.findMany({
    where: {
      balance: {
        gt: 0,
      },
    },
  });
  return result;
}

export async function getClientsWithgetNegativeBalance() {
  const result = await db.client.findMany({
    where: {
      balance: {
        lt: 0,
      },
    },
  });
  return result;
}


export const AddClientCounter = async () => {
  let clientCounter;
  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();
  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { Clients: existingRecord.Clients + 1 },
    });

    clientCounter = existingRecord.Clients + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { Clients: 1 } });

    clientCounter = newRecord.Clients;
  }

  // Use the clientCounter variable to access the updated payment value
  return clientCounter;
};




export async function AddNewCar(Car) {
  console.log(Car);
  try {
    // Check if the CarNo already exists for another client
    const existingCar = await db.Car.findFirst({
      where: {
        CarNo: Car.CarNo,
        clientId: { not: Car.clientId }, // Exclude the current client
      },
    });

    if (existingCar) {
      return "رقم اللوحة محجوز لعميل اخر";
    }

    const carDb = await db.Car.create({ data: Car });
    return "تمت اضافة السيارة  للعميل بنجاح";
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}









export async function groupByClientId() {
  try {
    const groupedClients = await db.openFixingOrder.groupBy({
      by: ["clientId"],
      _count: {
        clientId: true,
      },
    });

    const clientFixOrders = await Promise.all(
      groupedClients.map(async (client) => {
        const { clientId } = client;

        const fixOrders = await db.openFixingOrder.findMany({
          where: {
            clientId,
          },
          select: {
            fixOrederId: true,
            clientName: true,
          },
        });

        return {
          clientId,
          clientName: fixOrders[0].clientName,
          fixOrderIds: fixOrders.map((order) => order.fixOrederId),
        };
      })
    );

    return clientFixOrders;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}
