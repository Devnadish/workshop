
"use client";
import ClearButton from "@/components/shared/ClearButton";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { addTextComplain } from "@/db/complain";
import { Frown, Smile } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

function page() {



   const addComplain = async (data) => {
     const text = data.get("complain");
     const formData = { text, user: "khalid", username: "khalid", avatar: "" };
     if (!text) {
       toast.error("ننتظر شكواك", { duration: 3000 });
       return;
     }
     const done = await addTextComplain(formData);
     toast.success(done.msg, { duration: 3000 });
   };


  return (
    <div className="text-white flex flex-col items-center justify-start gap-4 mt-1 w-full ">
      {/* <div className="flex items-center gap-2">
        <p className="bg-primary px-10 py-2 rounded-md ">
          نحن نهتم بشكواك أو ملاحظاتك.
        </p>
        <Frown />
      </div> */}

      <div className="flex flex-col  items-center justify-between gap-2  w-[80%] lg:w-1/2 lg:flex-row">
        <p className="bg-blue-500 px-10 py-1 rounded-sm w-fit self-end ">
          نعتذر مسبقا.. ويسعدنا الاستماع لك
        </p>
        <p className="flex items-center justify-between bg-yellow-300 px-10 py-1 rounded-sm w-full lg:w-fit  self-end text-black ">
         تفصيل الشكوى مهم
         <Frown />
        </p>
      </div>

      <form
        action={addComplain}
        id="complainForm"
        className="w-[80%] flex flex-col gap-4 lg:w-1/2"
      >
        <Textarea
          placeholder="يسعدنا الاستماع لك"
          rows={10}
          id="sugTxt"
          name="complain"
        />
        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"complainForm"} FoucFiled={"sugTxt"} />
        </div>
      </form>
    </div>
  );
}

export default page;
