import NewFixOrder from '@/components/pagecomponent/fixing/NewFixOrder';
import React from 'react'

import { fetchClientNames, getAllClients } from "@/db/clients";

async function NewFix() {
  const client = await getAllClients();
  const clientsWithCars = client.filter(
    (client) => client.carsData.length > 0
  );

  return (
    <div>
      <NewFixOrder clientsWithCars={clientsWithCars} />
    </div>
  );
}

export default NewFix;
