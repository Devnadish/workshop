"use client";
import { useState, Suspense, lazy } from "react";
import { comments } from "@/constant/testmonail";
import { Button } from "@/components/ui/button";
import { PenLine,  Smile } from "lucide-react";
import Spinner from "@/components/shared/Spinner";
const ModalSlider = lazy(() => import( "@/components/shared/ModalSlider"));
const AddComment = lazy(() => import( "./AddComment"));
const ShowComment = lazy(() => import( "./ShowComment"));

const Testmonial = ({ comments }) => {
  const [open, setOpen] = useState(false);
  const [Writeopen, setWriteOpen] = useState(false);
  const title = "تعليقات العملاء";
  const desctiption =
    " نستطيع أن نحقق النجاح إذا استقبلنا النقد البنّاء وعملنا على استخدامه لتحسين قدراتنا ومهاراتنا.";
  const handleOpeny = async () => {
    setOpen(true); // Show the modal after the delay
  };

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-4">
        <Button
          className="bg-orange-600 text-black w-full rounded-none flex items-center gap-2 text-white font-semibold h-12 shadow-2xl rounded"
          onClick={() => handleOpeny()}
        >
          <Smile />
          <p>تعليق</p>
          <p className="underline underline-offset-8">{comments.length}</p>
        </Button>
        <Button
          className="bg-sky-600 text-black w-full rounded-none flex items-center gap-4 text-white font-semibold h-12 shadow-2xl rounded"
          onClick={() => setWriteOpen(true)}
        >
          <PenLine />
          يسعدنا تعليقك
        </Button>
      </div>

      {open && (
        // delay(3000)
        <Suspense fallback={<Spinner />}>
          <ModalSlider
            open={open}
            setOpen={setOpen}
            title={title}
            description={desctiption}
          >
            <ShowComment initialComments={comments} />
          </ModalSlider>
        </Suspense>
      )}
      {Writeopen && (
        <Suspense fallback={<Spinner />}>
          <ModalSlider
            open={Writeopen}
            setOpen={setWriteOpen}
            title={title}
            description={desctiption}
          >
            <AddComment />
          </ModalSlider>
        </Suspense>
      )}
    </div>
  );
};
export default Testmonial;
