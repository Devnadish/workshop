'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { savePaymentVoucher } from "@/db/payment";
import { Check,  Plus } from "lucide-react";
import React, { useState } from "react";
// import CustomInput from './CustomInput';

const PaymentVoucherForm = () => {

  const [PymentNo, setPymentNo] = useState(0);
  const [amount, setAmount] = useState(0);
  // const [docType, setDocType] = useState("");
  const [fixCode, setFixCode] = useState("");
  const [clientname, setClientname] = useState("");
  const [exptype, setExptype] = useState("");
  const [expname, setExpname] = useState("");
  const [detail, setDetail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
    const [selectedOption, setSelectedOption] = useState("fixing");



    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };



  const handlePymentNoChange = (e) => {
    setPymentNo(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const handleFixCodeChange = (e) => {
    setFixCode(e.target.value);
  };

  const handleClientnameChange = (e) => {
    setClientname(e.target.value);
  };

  const handleExptypeChange = (e) => {
    setExptype(e.target.value);
  };

  const handleExpnameChange = (e) => {
    setExpname(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };






 const handleSubmit = async (e) => {
  //  e.preventDefault();
   if (isSaving) return; // Prevent multiple submissions
   setIsSaving(true);

   try {
    const VoucerNo=await savePaymentVoucher()
    setPymentNo(VoucerNo);

    //  await new Promise((resolve) => setTimeout(resolve, 2000));
     // Save voucher data to Prisma or perform other actions here
     // await saveVoucherData(voucher); // Example of an asynchronous save function

     // Reset form after successful save
     setVoucher({
       PymentNo: 0,
       amount: 0,
       docType: "",
       fixCode: "",
       clientname: "",
       exptype: "",
       expname: "",
       detail: "",
     });
   } catch (error) {
     console.error(error);
   } finally {
     setIsSaving(false);
   }
 };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <h1 className="bg-red-400 w-full text-center py-2 shadow-lg mb-4 mt-1 text-base font-semibold ">
        سند صرف
      </h1>
      <form
        className="w-full"
        action={handleSubmit}
        // onSubmit={handleSubmit}
        //TODO: on action setIsSaving no Working find solution
      >
        <div className="flex items-center justify-between gap-4">
          <p className="flex flex-col items-center gap-2 border px-3 py-1 rounded-md bg-black/40 ">
            رقم المستند
            <span>{PymentNo}</span>
          </p>
          <CustomInput
            label="المبلغ"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            cs="w-[70%] border border-red-600 px-6 py-2 rounded-md bg-white/10"
          />
        </div>

        <PaymentType
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onChangeOption={handleOptionChange}
        />
        {selectedOption === "fixing" ? (
          <Fixing
            fixCode={fixCode}
            clientname={clientname}
            onChangeFiIxFN={handleFixCodeChange}
            onChangeClientFN={handleClientnameChange}
          />
        ) : (
          <Mangment
            exptype={exptype}
            expname={expname}
            handleExptypeChange={handleExptypeChange}
            handleExpnameChange={handleExpnameChange}
          />
        )}

        <CustomText
          label="التفاصيل"
          id="status"
          name="detail"
          value={detail}
          onChange={handleDetailChange}
          rows={5}
        />

        <Button
          type="submit"
          disabled={isSaving}
          className="disabled:bg-green-500 w-full"
        >
          {isSaving ? "جاري الحفظ..." : "حفظ"}
        </Button>
      </form>
    </div>
  );
};

export default PaymentVoucherForm;

const CustomInput = ({ label, id, name, value, onChange, cs }) => {
  return (
    <div className={cs}>
      <Label
        htmlFor={id}
        className="block text-gray-300 text-base font-bold mb-1"
      >
        {label}
      </Label>
      <Input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const CustomText = ({ label, id, name, value, onChange, rows }) => {
  return (
    <div className="mb-4 ">
      <Label
        htmlFor={id}
        className="block text-gray-300 text-base font-bold mb-1"
      >
        {label}
      </Label>
      <Textarea
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const PaymentType = ({ selectedOption, setSelectedOption, onChangeOption }) => {
  return (
    <div className="shadow-lg border bg-blue-100/20  p-4 rounded-lg mt-2 ">
      <div className="mb-4">
        <Label className="block text-gray-100 text-base font-bold mb-2">
          وجهة السند
        </Label>
        <div className="flex items-center justify-around gap-8">
          <div className="flex items-center bg-red-600 px-4 py-2 rounded-md gap-2 w-full">
            <input
              type="radio"
              id="fixing"
              name="fixing"
              value="fixing"
              checked={selectedOption === "fixing"}
              onChange={onChangeOption}
              className="mr-2"
            />
            <Label htmlFor="fixing" className="text-gray-100 w-full text-base">
              امر اصلاح
            </Label>
          </div>
          <div className="flex items-center justify-start  bg-blue-600  py-2 rounded-md gap-2 w-full">
            <input
              type="radio"
              id="mangment"
              name="mangment"
              value="mangment"
              checked={selectedOption === "mangment"}
              onChange={onChangeOption}
              className="mr-2"
            />
            <Label
              htmlFor="mangment"
              className="text-gray-100 w-full text-base"
            >
              مصاريف ادارية
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};





  const Fixing = ({
    fixCode,
    clientname,
    setClientname,
    onChangeFiIxFN,
    onChangeClientFN,
  }) => {
    return (
      <>
        <div className="mb-4 flex flex-col gap-4">
          <div>
            <Label
              htmlFor="inputField"
              className="block text-gray-100 text-base font-bold mb-2"
            >
              رقم امر الاصلاح
            </Label>
            <div className="flex items-center gap-1 ">
              <Input
                type="text"
                id="inputField"
                name="fixcode"
                value={fixCode}
                onChange={onChangeFiIxFN}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              <Button>
                <Check />
              </Button>
            </div>
          </div>
          <p className="w-full border flex justify-center items-center h-8 rounded-md">
            اسم العميل
          </p>
        </div>
      </>
    );
  };

  const Mangment = ({exptype,expname,handleExptypeChange,handleExpnameChange}) => {
    return (
      <>
        <div className="mb-4 ">
          <div className="flex items-center justify-between p-2">
            <Label
              htmlFor="selectField"
              className="block text-gray-100 text-base font-bold mb-2"
            >
              مصاريف ادارية
            </Label>
            <Button>
              <Plus />
            </Button>
          </div>
          <select
            id="selectField"
            name="selectField"
            value={exptype}
            onChange={handleExptypeChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">نوع المصروف</option>
            <option value="رواتب موظفين"> رواتب موظفين</option>
            <option value="الايجار"> الايجار</option>
            <option value="كهرباء">كهرباء</option>
          </select>
        </div>
      </>
    );
  };
