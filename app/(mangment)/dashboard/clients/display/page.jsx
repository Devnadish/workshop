import Filtering from "@/components/pagecomponent/clients/display/Filtering";
import { getAllClients } from "@/db/clients";

import React from "react";

export const dynamic = "force-dynamic";

const ClientList = async({ clients1, onEdit, onDelete }) => {
const clients = await getAllClients();

  return (
    <div className="container  min-w-full">
      <Filtering clientsData={clients} />
      {/* <ShowClientCard clients={clients} /> */}
    </div>
  );
};

export default ClientList;
