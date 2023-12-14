"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveRecietVoucher } from "@/db/reciet";
import { toast } from "react-hot-toast";
import { validateForm } from "@/lib/validation/recipt";
import { Button } from "@/components/ui/button";
import ClientsWithOpenFixingOrder from "@/components/shared/ClientsWithOpenFixingOrder";
import PageTitle from "@/components/shared/PageTitle";
import { Calendar, Car, CircleDollarSign } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
const RecietVoucher = () => {
  const [result, setResult] = useState({});
   const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedFixOrderId, setSelectedFixOrderId] = useState("");
const handleNewDocument = () =>{ document.getElementById("RecietForm").reset();}



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
  console.log(Reciet);

  setResult({
    recietNo: Reciet.recietNo,
    client: Reciet.client,
    amt: Reciet.total,
    fixNo: Reciet.fixNo,
    msg: Reciet.msg,
  });

  toast.custom((t) => <AlertStyle result={Reciet} id={t.id} />, {
    position: "bottom-center",
    duration: Infinity, // To disable auto-close
  });
};

  return (
    <>
      <PageTitle title="سند قبض" />
      <p className="border w-fit bg-black mb-4 rounded-md px-1 py-1">
        رقم السند {result.recietNo}
      </p>
      <form
        action={handleSubmit}
        id="RecietForm"
        className="max-w-md mx-auto w-full flex flex-col items-center gap-4 "
      >
        {/* header */}
        <div className="flex justify-between items-center w-full gap-2">
          <INPUT
            placeholder={"المبلغ المستلم"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            cN="flex-1"
          />
          <INPUT
            defaultValue={new Date().toISOString().slice(0, 10)}
            placeholder={"التاريخ"}
            name={"docDate"}
            type={"date"}
            icon={<Calendar size={15} strokeWidth={1.5} />}
            cN="flex-1"
          />
        </div>
        {/* </div> */}

        {/* client info */}
        <ClientsWithOpenFixingOrder
          selectedClientId={selectedClientId}
          setSelectedClientId={setSelectedClientId}
          selectedClientName={selectedClientName}
          setSelectedClientName={setSelectedClientName}
          selectedFixOrderId={selectedFixOrderId}
          setSelectedFixOrderId={setSelectedFixOrderId}
        />

        {/* description */}
        <div className=" w-full">
          <Label htmlFor="description" className="block mb-2">
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
          <Button onClick={handleNewDocument} type="button">
            سند جديد
          </Button>
        </div>
      </form>
    </>
  );
};
export default RecietVoucher;
const AlertStyle=({result,id})=>{

  const handleClose = () => {
    toast.remove()
  };
  return (
    <>
      <div
        className="border w-full rounded-md p-2 bg-gray-200  text-black  text-md font-semibold shadow-lg flex flex-col gap-3 text-right
            "
      >
        <div className="flex items-center justify-between">
          <p>
            رقم السند :
            <span className=" text-black rounded-md px-4 py-1  ">
              {result.recietNo}
            </span>
          </p>
          <p className="bg-blue-400 rounded-md py-1 px-3 border border-white text-white">
            المبلغ المستلم :<span>{result.amt}</span>
          </p>
        </div>

        <p>
          اسم العميل :
          <span className="bg-white text-black rounded-md px-4 py-1  ">
            {result.client}
          </span>
        </p>
        <p>
          رقم الاصلاح :
          <span className="bg-green-600 text-white rounded-md px-4 py-1  ">
            {result.fixNo}
          </span>
        </p>
        <button
          onClick={handleClose}
          className="w-fit  border   rounded-lg p-2  flex items-center justify-center text-sm font-medium text-white self-end bg-red-600 shadow-lg"
        >
          Close
        </button>
      </div>
      ;
    </>
  );}


//   import React from 'eact';
// import { Input, Icon } from '@shadron/ui';
