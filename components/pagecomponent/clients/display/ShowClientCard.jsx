import React from 'react'
import { getTimeElapsed } from "@/lib/timeanddate";
import { Car, DollarSign, Phone, PhoneCallIcon, Scale } from "lucide-react";
import CardAction from "@/components/pagecomponent/clients/display/CardAction";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import CallClient from '@/components/shared/CallClient';
import Avatar from '@/components/shared/Avatar';
export const dynamic = "force-dynamic";
function ShowClientCard({ clients }) {


  return (
    <ScrollArea className="h-[65vh] w-full rounded-md   flex items-center justify-center p-2 gap-2   ">
      <div className=" flex flex-col  items-center justify-center max-w-full min-w-full  gap-4">
        {clients.map((client) => (
          <div
            className="border shadow-lg rounded-lg  flex gap-3  flex-col items-center justify-center  overflow-hidden bg-white/90 text-black min-w-full  "
            key={client.id}
          >
            <CardHeader
              name={client.name}
              id={client.clientIDs}
              date={getTimeElapsed(client.updatedDate)}
              phone={client.mobile}
              balance={client.balance}
            />
            <div className="flex  flex-col relative font-semibold justify-center items-center w-full" >

                <Car size={30} strokeWidth={1.75} className='self-start absolute -top-4 left-4 bg-black text-white rounded-md px-1' />
                <ShowCars cars={client.carsData} />
            </div>
            <CardAction />
          </div>
        ))}
      </div>
      {/* <ScrollBar orientation="horizontal" /> */}
    </ScrollArea>
  );
}


const CardHeader=({name,id,date,phone,balance})=>{return (
  <>
    <div id="d1" className="flex flex-col w-full gap-1 ">

      <div  id="d2" className="flex items-center justify-between bg-green-600 w-full h-10  px-2">
        <CallClient phone={phone} />
        <div className='flex items-center'>
        <p className="font-bold text-base ">{name}</p>
        <Avatar src={""} />
        </div>
      </div>
      <div id="d3" className="flex items-center justify-between px-3 ">
        <p className="text-xs bg-white/20 rounded w-fit px-4 py-1 ">{date}</p>

          <div id="d4"
            className={`text-base font-bold  rounded flex items-center justify-center l gap-4 px-3  ${
              balance === 0
                ? "bg-green-300 text-black"
                : client.balance < 0
                ? "bg-red-400"
                : "bg-blue-400"
            } py-1    `}
          >
            {balance}
            <Scale />
          </div>
        </div>

      </div>

  </>
);}




export default ShowClientCard
const ShowCars = ({ cars }) => {

  return (
    <div className="border border-black/10  w-11/12 rounded p-2 flex flex-wrap items-center gap-2  justify-center  ">
      {cars?.length === 0 ? (
        <p className=" text-black/50  underline underline-offset-4  px-6 rounded-md">
          لاتوجد سيارة معرفة للعميل
        </p>
      ) : null}
      {cars?.map((el) => {
        return (
          <div
            key={el.id}
            className="px-3 py-1 rounded-lg bg-white/20 text-[.75rem]"
          >
            <p className="underline underline-offset-4">
              {el.CarNo}
              {/* /{el.carName} */}
            </p>
          </div>
        );
      })}
    </div>
  );
};
