import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

function RegisterPage() {
  return (
    <div className="text-white flex flex-col items-center justify-center ">
      <span className="border border-primary-foreground/30  rounded-md px-8 py-2 w-10/12 mt-3 flex items-center justify-center text-2xl bg-primary/50 shadow-lg text-primary-foreground/50">
        تسجيل
      </span>
      <form className="flex flex-col gap-4 p-4 w-10/12">
        <Input type="text" placeholder="الاسم" />
        <Input type="text" placeholder="رقم الجوال" />
        <Input type="email" placeholder="الايميل" />
        <Input type="text" placeholder="نوع السيارة" />
        <Input type="text" placeholder="موديلها" />
        <Input type="text" placeholder="رقم الشاصي" />
        <Button type="submit" className="flex items-center gap-4">
          <p>حفظ</p>
          <Send size={15} />
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
