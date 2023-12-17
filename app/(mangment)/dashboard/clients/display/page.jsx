import Filtering from "@/components/pagecomponent/clients/display/Filtering";
import { getAllClients } from "@/db/clients";

import React from "react";

export const dynamic = "force-dynamic";

const ClientList = async({ clients1, onEdit, onDelete }) => {
const clients = await getAllClients();
console.log(clients);

  return (
      <Filtering clientsData={clients} />
    // <div className="w-full flex flex-col items-center justify-center bg-black">
    //   <ShowClientCard clients={clients} />
    // </div>
  );
};

export default ClientList;
