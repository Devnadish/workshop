import React from 'react'
import { getTimeElapsed } from "@/lib/timeanddate";
import { Phone } from "lucide-react";
import CardAction from "@/components/pagecomponent/clients/display/CardAction";
import { ScrollArea } from "@/components/ui/scroll-area";
function ShowClientCard({ clients }) {
  return (
    <ScrollArea className="h-[65vh] w-full rounded-md border">
      <div className="w-full flex flex-wrap items-center justify-center">
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
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default ShowClientCard
