"use client"
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { comments } from "@/constant/testmonail";
import Avatar from "./Avatar";
import { Button } from "@/components/ui/button";
import { Send, Smile } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";

const Testmonial = () => {
  const Card = ({ avatar, name, Comment, date }) => {
    return (
      <>
        <p>{avatar}</p>
        <p>{name}</p>
        <p>{Comment}</p>
        <p>{date}</p>
      </>
    );
  };

  const map = (el) => {
    return (
      <>
        <Card
          avatar={el.avatar}
          name={el.name}
          Comment={el.comment}
          date={el.date}
        />
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col items-center mt-4 gap-1 w-full">
        <AddComment />

      </div>
    </>
  );
};

export default Testmonial;
const AddComment = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className="container">
      <Button
        className="bg-orange-600 text-black w-full rounded-none flex items-center gap-4 text-white font-semibold h-12 shadow-2xl rounded"
        onClick={() => setOpen(true)}
      >
        <Smile />
        يسعدنا تعليقك على خدمتنا
      </Button>
      <ShowComment open={open} setOpen={setOpen}/>
    </div>
  );
};


const ShowComment=({open,setOpen})=>{
  const handleClose=()=>{setOpen(false)}
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen} onClose={handleClose}>
        {/* <Sheet key={side}> */}

        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle>تعليقات العملاء</SheetTitle>
            <SheetDescription className="flex items-center gap-2 mb-2">
              تعليقك مصدر الهام ونجاح نتقبل السلبيات لكي نطور من نفسنا بكم ننجح
              <Smile className="text-green-600"/>
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[280px] w-full  rounded-md">
            <div className="flex flex-wrap items-center gap-4 justify-center ">
              {comments.map((el) => {
                return (
                  <>
                    <div className="flex  flex-col items-center  gap-4 bg-slate-100 text-black  rounded shadow-lg border  w-full ">
                      <div className="flex items-center justify-between w-full  bg-slate-200 text-black">
                        {/* <p>{el.avatar}</p> */}
                        <p className="text-[.8rem]">{el.date}</p>
                        <div className="flex items-center">
                          <p>{el.name}</p>
                          <Avatar src="" />
                        </div>
                      </div>

                      <p className="py-1 font-semibold">{el.comment}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </ScrollArea>
          <SheetFooter>
            {/* <SheetClose asChild> */}
            <div className="flex items-center gap-2 mt-4">
              <Input type="text" className="bg-green-400" />
              <Button>
                <Send />
              </Button>
            </div>
            {/* </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );}
