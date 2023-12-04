"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Appoentment() {
  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState("today");

  return (
    <div className="flex items-center justify-center mt-2 flex-col text-white gap-4 w-full">
      <p className="bg-yellow-500 text-white flex items-center gap-8  font-bold px-8 py-1 rounded-md ">
        طلب كشف في الموقع
      </p>
      {/* <RadioGroup
        defaultValue="comfortable"
        className="flex items-center w-[60%]  justify-between bg-green-600 px-10 py-2 rounded-md"
        onValueChange={(value) => setIsToday(value)}
      >
        <div className="flex items-center space-x-2 ">
          <RadioGroupItem
            className="bg-gray-200 ring-blue-500 hover:bg-gray-300 focus:ring-4 w-8 h-8"
            value="otherDay"
            id="r1"
          />
          <Label htmlFor="r1" className="text-xl">
            يوم اخر
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="today"
            id="r2"
            className="bg-gray-200 ring-blue-500 hover:bg-gray-300 focus:ring-4 w-8 h-8"
            onValueChange={(value) => setIsToday(value)}
          />
          <Label htmlFor="r2" className="text-xl">
            اليوم
          </Label>
        </div>
      </RadioGroup> */}
      <Today />
      {/* {isToday === "otherDay" ? (
        <OtherDay date={date} setDate={setDate} />
      ) : (
        <Today />
      )} */}
    </div>
  );
}

export default Appoentment;

const OtherDay = ({ date, setDate }) => {
  return (
    <>
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
    </>
  );
};

const Today = ({ date, setDate }) => {
  return (
    <>
      <div className="text-foreground px-4 rounded-md py-1 w-full md:w-1/2">
        <form className="flex flex-col gap-4">
          <Input placeholder="الموعد المطلوب" />
          <Input placeholder="نوع السيارة" />
          <Input placeholder="الموديل" />
          <Textarea placeholder="وصف المشكلة" rows={7} />

          <Button
            className="bg-green-500 text-white flex items-center gap-2  font-bold px-2 py-1 disabled:bg-red-600 "
            size="small"
            disabled={!date}
          >
            تاكيد <CalendarCheck />
          </Button>
        </form>
      </div>
    </>
  );
};
