"use client";
import React from "react";
import Submit from "@/components/shared/Submit";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Car, CarFront, CircleDollarSign } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import DocementNO from "@/components/shared/DocementNO";
import ClearButton from "@/components/shared/ClearButton";
import ClientsWithOpenFixingOrder from "@/components/shared/ClientsWithOpenFixingOrder";
import FindCar from "@/components/pagecomponent/back/reciptform/FindCar"



function ReciptForm() {

const handleSubmit = async (data) => {
  // Handle form submission here
  const detail = data.get("detail");
  const fromID = parseFloat(data.get("fromID"));
  const fromName = data.get("fromName");
  const amount = parseFloat(data.get("amount"));
  const fixingCode = parseInt(data.get("fixingCode"));
  const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
  const RecietData = {
    detail,
    fromID: parseFloat(selectedClientId),
    fromName: selectedClientName,
    amount,
    fixingCode: parseFloat(selectedFixOrderId),
    docDate,
  };

  const validation = validateForm(RecietData);
  if (!validation.isValid) {
    toast.error(validation.errorMessage);
    return;
  }

  const Reciet = await saveRecietVoucher(RecietData);

  setResult({
    recietNo: Reciet.recietNo,
    client: Reciet.client,
    amt: Reciet.total,
    fixNo: Reciet.fixNo,
    msg: Reciet.msg,
  });

//   toast.custom((t) => <AlertStyle result={Reciet} id={t.id} />, {
//     position: "bottom-center",
//     duration: Infinity, // To disable auto-close
//   });
};

  return (
    <form
      action={handleSubmit}
      id="RecietForm"
      className="max-w-md mx-auto w-full flex flex-col items-center gap-2 "
    >
      <div className=" flex items-start justify-start flex-col   gap-4 w-full ">
        <FindCar/>
        <INPUT
          placeholder={" رقم السيارة"}
          name={"CarId"}
          type={"text"}
          icon={<Car/>}
          cN="flex-1"
          h="h-[50px]"
          w="w-[200px]"
          textsize="text-[1.5rem]"
        //   bgColor="bg-red-300"
          id="CarId"
        />
        <INPUT
          placeholder={"المبلغ"}
          name={"amount"}
          type={"number"}
          icon={<CircleDollarSign />}
          cN="flex-1"
          h="h-[50px]"
          w="w-[200px]"
          textsize="text-[1.5rem]"
          bgColor="bg-red-300"
          id="amount"
        />
      </div>
      {/* header */}

      <div className="relative   w-full  ">
        <Label
          htmlFor="description"
          className="absolute -top-5 left-2  bg-yellow-300 text-black text-md px-3 rounded-md font-normal py-1"
        >
          الوصف
        </Label>
        <Textarea
          type="text"
          name="detail"
          placeholder="مرجعية المبلغ"
          className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
          rows={3}
        />
      </div>

      <div className="flex items-center justify-around w-full">
        <Submit />
        <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
      </div>
    </form>
  );
}

export default ReciptForm;
