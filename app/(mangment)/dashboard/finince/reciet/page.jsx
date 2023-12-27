"use client";
import React, { useState } from "react";

import { saveRecietVoucher, updateClientReceiptBalance } from "@/db/reciet";
import { toast } from "react-hot-toast";
import { validateForm } from "@/lib/validation/recipt";

import PageTitle from "@/components/shared/PageTitle";

import ReciptForm from "@/components/pagecomponent/back/reciptform/ReciptForm";
const RecietVoucher = () => {
  const [result, setResult] = useState({});
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedFixOrderId, setSelectedFixOrderId] = useState("");

  return (
    <div className="container flex flex-col w-full">
      <PageTitle title="سند قبض" />
      <ReciptForm />
    </div>
  );
};
export default RecietVoucher;
const AlertStyle = ({ result, id }) => {
  const handleClose = () => {
    toast.remove();
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
  );
};

//   import React from 'eact';
// import { Input, Icon } from '@shadron/ui';
