import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Comments } from "@/constant/commentSample";
import { Button } from "@/components/ui/button";

import { Smile, Frown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CommentsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center  w-[70%] text-bg-primary gap-4">
        <Link
          href={"/newcomment"}
          className="w-full bg-yellow-300  mt-2 text-foreground font-semibold"
        >
          اضافة تعليق
        </Link>
        <div className="text-white flex gap-2">
          <Button className="bg-green-400 w-full mt-2">
            <Smile className="h-6 w-6 text-black" />
          </Button>
          <Button className="bg-red-400 w-full mt-2">
            <Frown className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[65vh] w-[80%] mt-4  rounded-md  ">
        <div className="flex flex-col gap-4 px-4">
          {Comments.map((el, index) => {
            return (
              <div key={el.id}>
                <CommentCard
                  text={el.text}
                  publicationDate={el.publicationDate}
                  likeCount={el.likeCount}
                  dislikeCount={el.dislikeCount}
                  index={index + 1}
                  userName={el.userName}
                />
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

export default CommentsPage;

const CommentCard = ({
  text,
  publicationDate,
  likeCount,
  dislikeCount,
  index,
  userName,
}) => {
  const CommentHead = () => (
    <div className="bg-gray-2 border-black/10  border-b-2 py-1 px-2 flex items-center justify-between text-sm">
      <div className="flex  items-center gap-2">
        <Image
          src={`/gallary/${index}.jpg`}
          width={40}
          height={40}
          alt="khalid nadish"
          className="rounded-md border-1 border-white"
        />
        <span>{userName}</span>
      </div>
      <span className="bg-primary/30 px-2 rounded-md  text-primary-foreground text-xs">
        {publicationDate}
      </span>
    </div>
  );
  const CommentBody = () => <div className="p-4 bg-primary/10">{text}</div>;
  const CommentFooter = () => (
    <div>
      <div className="flex justify-between p-2">
        <Button
          variant="outline"
          className="flex items-center gap-4 bg-green-400"
        >
          <Smile /> <span>{likeCount}</span>
        </Button>
        <Button className="flex items-center gap-4 bg-red-400">
          <Frown /> <span>{dislikeCount}</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white flex flex-col rounded-lg">
      <CommentHead />
      <CommentBody />
      <CommentFooter />
    </div>
  );
};
