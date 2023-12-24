"use client";
import React, { useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { getOpenCards, getFixingOrder } from "@/db/payment";

const OpenFixingCard = ({ setInfo }) => {
  const [openCards, setOpenCards] = React.useState([]);

  const handleGetData = async (id) => {
    try {
      const data = await getFixingOrder(id);
      setInfo({
        clientId: data.clientId,
        clientName: data.clientName,
        fixingCode: data.fixingCode,
        fixOrdertotal: data.fixOrdertotal,
        fixOrderReceive: data.totalRecipt,
        totalSpent: data.totalSpent,
      });
    } catch (error) {
      // Handle error appropriately, e.g., log error or display a user-friendly message
      console.error("Error fetching open cards:", error);
    }
  };

  useEffect(() => {
    const fetchOpenCards = async () => {
      try {
        const openCardsData = await getOpenCards();
        // Do something with the fetched openCardsData, e.g., set state
        setOpenCards(openCardsData);
      } catch (error) {
        // Handle error appropriately, e.g., log error or display a user-friendly message
        console.error("Error fetching open cards:", error);
      }
    };

    fetchOpenCards();
  }, []);
  return (
    <div className="text-white  w-full h-18 ">
      <ScrollArea className="border rounded-md px-3">
        <div className="flex w-max space-x-4 p-4">
          {openCards.map((el) => {
            return (
              <div key={el.id}>
                <Button
                  className="border w-[130px] h-18 flex flex-col divide-y-2 divide-gray-300 bg-orange-400"
                  variant="secondary"
                  onClick={() => {
                    handleGetData(el.id);
                  }}
                >
                  <p>{el.selectedCar}</p>
                  {/* <p className="text-[.7rem]]">{el.clientName}</p> */}
                </Button>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default OpenFixingCard;
