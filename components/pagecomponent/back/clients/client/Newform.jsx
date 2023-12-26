"use client";
import React from "react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import Submit from "@/components/shared/Submit";
import { Mail, Phone, User } from "lucide-react";
import { toast } from "react-hot-toast";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
function Newform() {
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
      toast.error(validation.errorMessage);
      return;
    }

    try {
      const result = await addClient(newClient);
      toast.success(result.msg, { duration: 4000, position: "bottom-center" });
    } catch (error) {
      // Handle any errors that occur during API call or other operations
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  };
  return (
    <form
      action={handleSubmit}
      id="newClientForm"
      className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <INPUT
          type="text"
          name="name"
          placeholder="اسم العميل"
          icon={<User />}
          id="clientnameId"
        />
        <INPUT
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          icon={<Phone />}
          maxLength="10"
        />
      </div>
      <INPUT type="email" name="email" placeholder="الايميل" icon={<Mail />} />
      <div className="flex items-center justify-around ">
        <Submit />
        <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
      </div>
    </form>
  );
}

export default Newform;
