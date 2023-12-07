import CardAction from "@/components/pagecomponent/clients/display/CardAction";
import { getAllClients } from "@/db/clients";
import { getTimeElapsed } from "@/lib/timeanddate";
import { Phone } from "lucide-react";
import React from "react";


const ClientList = async({ clients1, onEdit, onDelete }) => {
const clients = await getAllClients();

  return (
    <div className="flex flex-wrap justify-center ">
      {clients.map((client) => (
        <div
          key={client.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-white/40 "
        >
          <div className="px-6 py-4 w-full">
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl mb-2">{client.name}</p>
              <p className="text-xs bg-white/20 rounded w-fit px-4 py-1 ">
                {getTimeElapsed(client.updatedDate)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={15} />
              <p className="text-gray-100 text-base">{client.mobile}</p>
            </div>
            <div className="flex  gap-4 font-semibold justify-end items-center">
              <p>الرصيد</p>
              <p
                className={`text-base ${
                  client.balance === 0
                    ? "bg-yellow-300 text-black"
                    : client.balance < 0
                    ? "bg-red-400"
                    : "bg-blue-400"
                } py-1 w-fit px-6 rounded `}
              >
                {client.balance}
              </p>
            </div>
          </div>
          <CardAction />
          {/* <div className="flex gap-4 px-6 pt-4 pb-2 ">
            <Button
              onClick={() => onEdit(client.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              تعديل
            </Button>
            <Button
              onClick={() => onDelete(client.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md ml-2"
            >
              حذف
            </Button>
            <Button
              onClick={() => onDelete(client.id)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ml-2"
            >
              التفاصيل
            </Button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ClientList;
