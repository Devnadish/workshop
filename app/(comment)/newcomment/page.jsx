import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Smile } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="text-white w-full  flex flex-col items-center justify-center gap-4 mt-4 ">
      <div className="flex items-center gap-2">
        <p className="bg-primary px-10 py-2 rounded-md ">رايك يهمنا</p>
        <Smile />
      </div>
      <form className="w-[80%] flex flex-col gap-4 lg:w-1/2">
        <p className="bg-primary px-10 py-2 rounded-md w-fit ">اكتب تعليقك..</p>
        <Textarea placeholder="اكتب تعليقك" rows={10} />
        <Button className="w-full">Save</Button>
      </form>
    </div>
  );
}

export default page;
