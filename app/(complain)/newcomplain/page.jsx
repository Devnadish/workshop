import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Frown, Smile } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-4 mt-4 w-full ">
      <div className="flex items-center gap-2">
        <p className="bg-primary px-10 py-2 rounded-md ">
          نحن نهتم بشكواك أو ملاحظاتك.
        </p>
        <Frown />
      </div>
      <form className="w-[80%] flex flex-col gap-4 lg:w-1/2">
        <p className="bg-blue-500 px-10 py-1 rounded-sm w-fit self-end ">
          نعتذر مسبقا.. ويسعدنا الاستماع لك
        </p>
        <Textarea placeholder="يسعدنا الاستماع لك" rows={10} />
        <Button className="w-full">ارسال </Button>
      </form>
    </div>
  );
}

export default page;
