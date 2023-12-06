"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const PaymentVoucher = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [image, setImage] = useState(null);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSenderChange = (event) => {
    setSender(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Amount:", amount);
    console.log("Date:", date);
    console.log("Description:", description);
    console.log("Recipient:", recipient);
    console.log("Sender:", sender);
    console.log("Image:", image);
  };

  return (
    <div className="container flex justify-center items-center  flex-col gap-4">
      <p className="bg-red-500 text-xl py-2 px-6 flex items-center justify-center font-bold mt-4 rounded-lg">
        سند صرف
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
        <div className="flex justify-around items-center">
          <div className="mb-4">
            <Label htmlFor="amount" className="block mb-2">
              المبلغ:
            </Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="date" className="block mb-2">
              التاريخ :
            </Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="description" className="block mb-2">
            الوصف
          </Label>
          <Textarea
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            rows={5}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="recipient" className="block mb-2">
            المستلم:
          </Label>
          <div className="flex items-center gap-4 ">
            <Input
              type="text"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <Plus className="bg-white/10 h-8 w-8 rounded-md" />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4">
          <Label htmlFor="amount" className="block mb-2 w-[200px]">
            امر اصلاح رقم:
          </Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="border border-gray-300 rounded px-4 py-2 "
          />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center
            self-center justify-center"
          >
            حفظ السند
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentVoucher;
