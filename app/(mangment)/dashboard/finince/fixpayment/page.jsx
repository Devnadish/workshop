"use client";
import React, { useState } from "react";
import ClearButton from "@/components/shared/ClearButton";
import ClientsWithOpenFixingOrder from "@/components/shared/ClientsWithOpenFixingOrder";
import INPUT from "@/components/shared/INPUT";
import PageTitle from "@/components/shared/PageTitle";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { savePaymentVoucher, updateClientPaymetBalance } from "@/db/payment";
import { fixValidateForm } from "@/lib/validation/payment";
import { CircleDollarSign, User, UsersRound, Wrench } from "lucide-react";
import toast from "react-hot-toast";
import { GiCash } from "react-icons/gi";
import { FaCarCrash } from "react-icons/fa";
import OpenFixingCard from "@/components/pagecomponent/back/payment/OpenFixingCard";
import ExpandMenu from "@/components/pagecomponent/back/dashboard/ExpandMenu";
import { BiExport } from "react-icons/bi";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
import { tr } from "date-fns/locale";
const FixPaymentVoucher = () => {
  const [info, setInfo] = useState({});
    console.log(info);

  const handleSubmit = async (data) => {
    const amount = parseFloat(data.get("amount"));
    const detail = data.get("detail");
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const fromID = parseFloat(ClientId);
    const fromName = ClientName;
    const fixingCode = parseFloat(FixOrderId);
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
      const pay = updateClientPaymetBalance(fromID, amount);

      setPymentNo(VoucerNo.paymentId);
      const msg = `تم صرف مبلغ  ${VoucerNo.amount} بموجب سند صرف رقم  ${VoucerNo.paymentId}`;
      toast.success(msg, { duration: 5000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex flex-col w-full items-center justify-between max-w-md">
      <PageTitle title="سند صرف تشغيلي" icon={<Wrench />} />
      <OpenFixingCard setInfo={setInfo} />
      <Information info={info} />

      <form
        id="paymentForm"
        className="  w-full  flex flex-col gap-4 items-center justify-center"
        action={handleSubmit}
      >
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



        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"paymentForm"} FoucFiled={"amountId"} />
        </div>
      </form>
    </div>
  );

  function Information({info}) {
    const [isOpen, setIsOpen] = useState(true);
const fixOrderReceiveValue = isNaN(parseFloat(info.fixOrderReceive))
  ? 0
  : parseFloat(info.fixOrderReceive);
const totalSpentValue = isNaN(parseFloat(info.totalSpent))
  ? 0
  : parseFloat(info.totalSpent);

const balance = fixOrderReceiveValue - totalSpentValue;


    return (
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={info.clientName}
        menuIcon={<User size={30} className="text-yellow-300" />}
      >
        <div className="flex w-full flex-wrap  items-center gap-4 shadow-xl  p-2 mb-4 rounded-b-md bg-sky-800">
          <div className="flex   items-center  gap-4 bg-blue-500 w-fit px-3 py-2 rounded-md">
            <FaCarCrash size={30} className="text-yellow-300" />
            <span>{info.fixingCode}</span>
          </div>
          <div className="flex   items-center  gap-4 bg-blue-500 w-fit px-3 py-2 rounded-md">
            <GiCash size={30} className="text-yellow-300" />
            <span>{info.fixOrdertotal}</span>
          </div>

          <div className="flex   items-center  gap-4 bg-green-500 w-fit px-3 py-2 rounded-md flex-grow">
            <LiaCashRegisterSolid size={30} className="text-yellow-300" />
            <p>{info.fixOrderReceive}</p>
          </div>
          <div className="flex   items-center  gap-4 bg-red-500 w-fit px-3 py-2 rounded-md ">
            <BiExport size={30} className="text-red-200" />
            <p>{info.totalSpent}</p>
          </div>
          <div
            className={`flex   items-center justify-center gap-4
              ${
                balance > 0 ? "bg-emerald-950" : "bg-red-950"
              } w-fit px-3 py-2 rounded-md flex-grow`}
          >
            <BsCashCoin size={30} className="text-red-200" />
            <p>{balance}</p>
          </div>
        </div>
      </ExpandMenu>
    );
  }
};

export default FixPaymentVoucher;
