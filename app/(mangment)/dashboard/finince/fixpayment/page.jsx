"use client";
import ClientsWithOpenFixingOrder from "@/components/shared/ClientsWithOpenFixingOrder";
import DocementNO from "@/components/shared/DocementNO";
import Expensis from "@/components/shared/Expensis";
import INPUT from "@/components/shared/INPUT";
import PageTitle from "@/components/shared/PageTitle";
import Submit from "@/components/shared/Submit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { savePaymentVoucher, updateClientPaymetBalance } from "@/db/payment";
import { fixValidateForm, validateForm } from "@/lib/validation/payment";
import { Label } from "@radix-ui/react-label";
import { CircleDollarSign, FileDigit } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const FixPaymentVoucher = () => {
  const [PymentNo, setPymentNo] = useState(0);
  const [expname, setExpname] = useState("");
    const [selectedClientId, setSelectedClientId] = useState("");
    const [selectedClientName, setSelectedClientName] = useState("");
    const [selectedFixOrderId, setSelectedFixOrderId] = useState("");




  const handleSubmit = async (data) => {
    const amount = parseFloat(data.get("amount"));
    const detail = data.get("detail");
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const fromID = parseFloat(selectedClientId);
    const fromName=selectedClientName
    const fixingCode = parseFloat(selectedFixOrderId);
    const paymentType = "fixing";
    const collector = "سند تشغيلي";


    const Paymentdata = {
      amount,
      detail,
      paymentType,
      docDate,
      collector,
      fromID ,
      fromName ,
      fixingCode ,
    };

     const validation = fixValidateForm(Paymentdata);
     if (!validation.isValid) {
       toast.error(validation.errorMessage);
       return;
     }

    try {
      const VoucerNo = await savePaymentVoucher(Paymentdata);
const pay= updateClientPaymetBalance(fromID, amount)

      setPymentNo(VoucerNo.paymentId);
      const msg = `تم صرف مبلغ  ${VoucerNo.amount} بموجب سند صرف رقم  ${VoucerNo.paymentId}`;
       toast.success(msg, { duration: 5000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PageTitle title="سند صرف تشغيلي" />
      <form
        id="paymentForm"
        className="  w-full  flex flex-col gap-4 items-center justify-center"
        action={handleSubmit}
      >
        <div className="mb-4 flex items-center justify-between  gap-4">
          <DocementNO DocID={PymentNo} />
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
            />

        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4">
          <ClientsWithOpenFixingOrder
            selectedClientId={selectedClientId}
            setSelectedClientId={setSelectedClientId}
            selectedClientName={selectedClientName}
            setSelectedClientName={setSelectedClientName}
            selectedFixOrderId={selectedFixOrderId}
            setSelectedFixOrderId={setSelectedFixOrderId}
          />
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col justify-start gap-2">
              <Label htmlFor="date">التاريخ :</Label>
              <Input
                type="date"
                name="docDate"
                defaultValue={new Date().toISOString().slice(0, 10)}
                placeholder="تاريخ الاستلام"
                className="placeholder-gray-600 border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
          </div>
        </div>

        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <div className="flex items-center justify-around">
          <Submit />
          <Button
            type="button"
            onClick={() => {
              document.getElementById("paymentForm").reset();
            }}
          >
            جديد
          </Button>
        </div>
      </form>
    </>
  );
};

export default FixPaymentVoucher;
