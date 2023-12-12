import React from 'react'
import { getTimeElapsed } from "@/lib/timeanddate";
import { Car, Phone } from "lucide-react";
import CardAction from "@/components/pagecomponent/clients/display/CardAction";
import { ScrollArea } from "@/components/ui/scroll-area";
export const dynamic = "force-dynamic";
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
                <CardHeader
                  name={client.name}
                  id={client.clientIDs}
                  date={getTimeElapsed(client.updatedDate)}
                  phone={client.mobile}
                />
              </div>
              <div className="flex  flex-col gap-4 font-semibold justify-end items-center">
                <p
                  className={`text-base flex gap-4 ${
                    client.balance === 0
                      ? "bg-yellow-300 text-black"
                      : client.balance < 0
                      ? "bg-red-400"
                      : "bg-blue-400"
                  } py-1 w-fit px-6 rounded `}
                >
                  {client.balance}
                  <span>الرصيد </span>
                </p>
                <div calssName="w-full">
                  <Car size={40} strokeWidth={.75}/>
                  <ShowCars cars={client.carsData} />
                </div>
                {/* </div> */}
              </div>
            </div>
            <CardAction />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}


const CardHeader=({name,id,date,phone})=>{return (
  <>
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center justify-between bg-green-600 w-full rounded-lg px-2">
        <p className="font-semibold text-lg ">
          <span>العميل :</span>
          {name}
        </p>
        <p className="font-semibold text-lg mb-2">
          <span>الرقم :</span>
          {id}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs bg-white/20 rounded w-fit px-4 py-1 ">{date}</p>
        <div className="flex items-baseline gap-2">
          <p className="font-semibold text-lg mb-2 underline">{phone}</p>
          <Phone size={15} strokeWidth={1} />
        </div>
      </div>
    </div>
  </>
);}




export default ShowClientCard
const ShowCars = ({ cars }) => {

  return (
    <div className="border w-full rounded p-2 flex items-center gap-2 flex-wrap justify-center ">
      {cars?.length===0 ? <p className='bg-red-500 text-white px-6 rounded-md'>لاتوجد سيارة معرفة للعميل</p>:null}
      {cars?.map((el) => {
        return (
          <div key={el.id} className="px-3 py-1 rounded-lg bg-white/20">
            <p>
              {el.CarNo}/{el.carName}
            </p>
          </div>
        );
      })}
    </div>
  );
};
