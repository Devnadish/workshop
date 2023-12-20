"use client";

import Submit from "@/components/shared/Submit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTextComment } from "@/db/clients";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

const AddComment = () => {
  const addComments = async (data) => {
    const comment = data.get("comment");
    const formData={  comment  ,  user:"khalid"     ,  username:"khalid" ,  avatar:"" }
    const done = await addTextComment(formData);
    toast.success(done.msg,{duration:3000})
  };
  const handleclear = () => {
    document.getElementById("commentForm").reset();
    document.getElementById("textdata").focus();
  };
  return (
    <>
      <form
        id="commentForm"
        action={addComments}
        className="flex flex-col items-center gap-2 mt-4"
      >
        <Textarea
          type="text"
          id="textdata"
          className="bg-green-400"
          rows={7}
          name="comment"
        />
        <div className="flex items-center justify-around">
          <Submit type="submit">
            <Send />
          </Submit>
          <Button type="button" onClick={() => handleclear()}>
            مسح
          </Button>
        </div>
      </form>
    </>
  );
};
export default AddComment;
