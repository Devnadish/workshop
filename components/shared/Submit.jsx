"use client"
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function Submit() {
  const status = useFormStatus();
  return (
    <Button
      disabled={status.pending}
      className="w-6/12 flex items-center justify-center gap-4 bg-blue-500"
    >
      {status.pending ? (
        <>
          <span>جاري الحفظ..</span>
          <div className="spinner w-4 h-4 border-2 border-blue-200 rounded-full delay-500"></div>
        </>
      ) : (
        <>
          <span>حفظ</span>
          <Send size={18} />
        </>
      )}
    </Button>
  );
}


export default Submit
