"use client";
import Avatar from "@/components/shared/Avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { comments } from "@/constant/testmonail";
import { getTimeElapsed } from "@/lib/timeanddate";

const ShowComment = ({ comments }) => {
  return (
    <>
      <ScrollArea className="h-[280px] w-full  rounded-md mt-4 p-4">
        <div className="flex flex-wrap items-center gap-4 justify-center ">
          {comments.map((el) => {
            return (
              <div
                className="flex  flex-col items-center  gap-4 p-4  text-black  rounded shadow-lg border  w-full "
                key={el.id}
              >
                <div className="flex items-center justify-between w-full  text-black border-b">
                  {/* <p>{el.avatar}</p> */}
                  <p className="text-[.8rem] bg-slate-300 px-3 rounded-lg">
                    {getTimeElapsed(el.updatedAt)}
                  </p>
                  <div className="flex items-center">
                    <p>{el.username}</p>
                    <Avatar src="" />
                  </div>
                </div>

                <p className=" font-semibold text-right w-full">{el.comment}</p>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
};
export default ShowComment;
