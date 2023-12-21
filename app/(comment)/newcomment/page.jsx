"use client"
import ClearButton from "@/components/shared/ClearButton";
import PageTitle from "@/components/shared/PageTitle";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { addSuggestion } from "@/db/suggestion";
import { Smile } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

function page() {
 const addComments = async (data) => {
  // "use server"
   const text = data.get("suggestion");
   const formData = { text, user: "khalid", username: "khalid", avatar: "" };
   if(!text){
     toast.error("ننتظر اقتراحك", { duration: 3000 });
    return
   }
   const done = await addSuggestion(formData);
   toast.success(done.msg, { duration: 3000 });
 };
  return (
    <div className="text-white w-full  flex flex-col items-center  gap-4 ">
      <PageTitle title={"اقتراحك يعني الكثير لنا"} icon={<Smile />} />
      <form
        id="sugestionForm"
        className="w-[80%] flex flex-col gap-4 lg:w-1/2 mx-auto"
        action={addComments}
      >
        <Textarea placeholder="اكتب اقتراحك" rows={10} id="sugTxt" name="suggestion" />
        <div className="flex items-center justify-around">
          <Submit />
          <ClearButton formId={"sugestionForm"} FoucFiled={"sugTxt"} />
        </div>
      </form>
    </div>
  );
}

export default page;
