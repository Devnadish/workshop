"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { comments } from "@/constant/testmonail";
import Avatar from "./Avatar";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

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
      <div className="flex flex-col items-center mt-4 gap-1">
        <AddComment />
        <ScrollArea className="h-[280px] w-full  rounded-md">
          <div className="flex flex-wrap items-center gap-4 justify-center ">
            {comments.map((el) => {
              return (
                <>
                  <div className="flex  flex-col items-center  gap-4 bg-slate-500 text-white  rounded shadow-lg border  w-full ">
                    <div className="flex items-center justify-between w-full  bg-slate-400 ">
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
      </div>
    </>
  );
};

export default Testmonial;
const AddComment = () => {
  return (
    <>
      <Button className="bg-orange-300 text-black w-full rounded-none flex items-center gap-4">
        <Smile />
        يسعدنا تعليقك على خدمتنا
      </Button>
    </>
  );
};
