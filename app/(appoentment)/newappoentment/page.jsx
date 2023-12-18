"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

function Appoentment() {
  const [date, setDate] = useState(new Date());

  return (
    <div className=" flex items-center justify-center flex-col text-white gap-4 w-full ">
      <p className="bg-yellow-500 text-white flex items-center gap-8  font-bold px-8 py-1 rounded-md ">
        حجز الموعد مكسب لوقتك
      </p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow "
      />
      <div className="flex items-center gap-4">
        <div className="bg-yellow-200 text-foreground w-fit px-4 rounded-md py-1">
          {date ? (
            date.toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          ) : (
            <p className=" text-foreground w-fit px-4 rounded-md py-1">
              حدد التاريخ
            </p>
          )}
        </div>
        <Button
          className="bg-green-500 text-white flex items-center gap-2  font-bold px-2 py-1 disabled:bg-red-600 "
          size="small"
          disabled={!date}
        >
          تاكيد <CalendarCheck />
        </Button>
      </div>
    </div>
  );
}

export default Appoentment;
