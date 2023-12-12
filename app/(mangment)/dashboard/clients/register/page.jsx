"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
import { toast } from 'react-hot-toast';
import Submit from "@/components/shared/Submit";



function RegisterPage() {
  const [CID, SETCID] = useState("");

  const handleNewClient = () => {
    document.getElementById("newClientForm").reset();
  };

  const handleSubmit = async (data) => {
    const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");

    const newClient = {
      name,
      mobile,
      email,
    };
    const validation = validateForm(newClient);
    if (!validation.isValid) {
      toast({
        variant: "destructive",
        title: validation.errorMessage,
        // action: <ToastAction altText="Try again">اعد المحاولة</ToastAction>,
      });
      return;
    }

    try {
      const result = await addClient(newClient);
      SETCID(result.clientId);
      toast.success(result.msg, { duration: 4000, position: "bottom-center" });
      //  toast.custom(<div className="text-2xl border bg-red-400">{result.msg}</div>);
    } catch (error) {
      // Handle any errors that occur during API call or other operations
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <span className="border border-primary-foreground/30 rounded-md px-8 py-1  mt-3 flex items-center justify-center text-2xl bg-primary/50 shadow-lg text-primary-foreground/50 w-full">
        تاسيس عميل جديد
      </span>
      <form
        action={handleSubmit}
        id="newClientForm"
        className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center"
      >
        <div className="border px-4 rounded-md py-1 bg-black/30 flex items-center gap-4">
          <p>رقم العميل</p>
          <p className="font-bold text-2xl">{CID}</p>
        </div>
        <Input
          type="text"
          name="name"
          placeholder="اسم العميل"
          className="border-red-300"
        />
        <Input
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          className="border-red-300"
        />
        <Input type="email" name="email" placeholder="الايميل" />

        <div className="flex items-center justify-around w-full">
          <Submit />
          <Button onClick={handleNewClient} type="button">
            جديد
          </Button>
        </div>
      </form>
    </>
  );
}


export default RegisterPage;
