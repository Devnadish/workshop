"use client";
import React, { useState } from "react";
import ClearButton from "@/components/shared/ClearButton";
import INPUT from "@/components/shared/INPUT";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { savePaymentVoucher } from "@/db/payment";
import { updateClientPaymentBalance } from "@/db/payment";
import { CircleDollarSign } from "lucide-react";
import { fixValidateForm } from "@/lib/validation/payment";
import OpenFixingCard from "./OpenFixingCard";
function SaveVoucher({ data }) {
  const [info, setInfo] = useState({});

  const handleSubmit = async (data) => {
    const amount = parseFloat(data.get("amount"));
    const detail = data.get("detail");
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const fromID = parseFloat(info.clientId);
    const fromName = info.clientName;
    const fixingCode = parseFloat(info.fixingCode);
    const paymentType = "fixing";
    const collector = "سند تشغيلي";
    const Paymentdata = {
      amount,
      detail,
      paymentType,
      docDate,
      collector,
      fromID,
      fromName,
      fixingCode,
    };
    const validation = fixValidateForm(Paymentdata);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    try {
      const VoucerNo = await savePaymentVoucher(Paymentdata);
      const pay = updateClientPaymentBalance(fromID, amount);
      const msg = `تم صرف مبلغ  ${VoucerNo.amount} بموجب سند صرف رقم  ${VoucerNo.paymentId}`;
      toast.success(msg, { duration: 5000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex flex-col  items-center justify-between max-w-md border border-white/30 rounded-md p-4">
      <OpenFixingCard data={data} setInfo={setInfo} info={info} />
      <form
        id="paymentForm"
        className="w-full flex flex-col gap-4 items-start justify-start "
        action={handleSubmit}
      >
        <div className="flex  gap-4 items-center justify-center self-end ">
          <label htmlFor="amountId" className="text-xl text-white">
            المبلغ
          </label>
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
            id="amountId"
          />
        </div>

        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
        />

        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"paymentForm"} FoucFiled={"amountId"} />
        </div>
      </form>
    </div>
  );
}

export default SaveVoucher;
