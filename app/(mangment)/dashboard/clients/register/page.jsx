"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { addClient, checkClientExists } from "@/db/clients";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

function RegisterPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (event) => {
   //  event.preventDefault();
   //  const { name, mobile, email, cars, model, owner } = formData;

   const { name, mobile, email, cartype, year, color, carSignno, bodyno } =
     formData;
   if (!name) {
     toast({
       variant: "destructive",
       title:  "لاسمكن حفظ عميل بدون  اسم ",
       //  description: "There was a problem with your request.",
       action: <ToastAction altText="Try again">اعد المحاولة</ToastAction>,
     });
     return false;
   }
      if (!mobile) {
        toast({
          variant: "destructive",
          title: "لاسمكن حفظ عميل بدون رقم جوال  ..  ",

          action: <ToastAction altText="Try again">اعد المحاولة</ToastAction>,
        });
        return false;
      }

   const newClient = {
     name,
     mobile,
     email,
     cars: [
       {
         cartype,
         year,
         color,
         carSignno,
         bodyno,
       },
     ],
   };

const check =  await  checkClientExists(mobile);
if (check) {
  toast({
    variant: "blue",
    title: "العميل موجود مسبقا",
    description: `اسم العميل : ${check} `,
  });
     return false;
    }




   const result = await addClient(newClient);
     toast({
       variant: "green",
       title: "تم  تاسيس كرت للعميل بنجاح ",
     });
 };


  return (
    <div className="text-white flex flex-col items-center justify-center ">
      <span className="border border-primary-foreground/30  rounded-md px-8 py-2 w-10/12 mt-3 flex items-center justify-center text-2xl bg-primary/50 shadow-lg text-primary-foreground/50">
        تسجيل
      </span>
      <form action={handleSubmit} className="flex flex-col gap-4 p-4 w-10/12">
        <Input
          type="text"
          name="name"
          placeholder="الاسم"
          className="border-red-300"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          className="border-red-300"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="الايميل"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="cartype"
          placeholder="نوع السيارة"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="year"
          placeholder="موديلها"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="bodyno"
          placeholder="رقم الشاصي"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="carSignno"
          placeholder="رقم اللوحة"
          onChange={handleChange}
        />
        <Button type="submit" className="flex items-center gap-4">
          <p>حفظ</p>
          <Send size={15} />
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
