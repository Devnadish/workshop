import {
  BadgeDollarSign,
  Car,
  CarFrontIcon,
  FileCheck,
  FileEdit,
  FilePlus,
  Frown,
  Image,
  MapPin,
  MessageCircle,
  ScrollText,
  ShoppingCart,
  Smile,
  UserPlus,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { DashBoardMenu } from "@/constant/menu";

export default function Home() {
  return (
    // <main>
    <main className="flex  flex-wrap  gap-6 items-center justify-center p-4   w-full   ">
      <Maintinance />
      <Finince />
    </main>
  );
}

const Maintinance = () => {
  return (
    <>
      <div className="w-[70%] border flex  flex-col items-center text-white">
        <div className="flex items-center justify-around w-full bg-green-600">
          <p className=" text-xl  font-bold flex items-center justify-center">
            كرت صيانة
          </p>
          <Car size={40} />
        </div>
        <div className="w-full flex items-center gap-4 p-2">
          <div className="flex flex-col w-1/3">
            <p>جديد</p>
            <Link
              href={"/register"}
              className="bg-green-500 flex-col  gap-1  h-14 rounded-md flex items-center justify-center text-white/80 "
            >
              <FilePlus size={35} />
            </Link>
          </div>

          <div className="flex flex-col w-1/3">
            <p>تعديل</p>
            <Link
              href={"/register"}
              className="bg-green-500  flex-col gap-1   h-14 rounded-md flex items-center justify-center text-white/80 "
            >
              <FileEdit size={35} />
            </Link>
          </div>

          <div className="flex flex-col w-1/3">
            <p>اقفال</p>
            <Link
              href={"/register"}
              className="bg-green-500  flex-col gap-1  h-14 rounded-md flex items-center justify-center text-white/80 "
            >
              <FileCheck size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const Finince = () => {
  return (
    <>
      <div className="w-[70%] border flex  flex-col items-center text-white">
        <div className="flex items-center justify-around w-full bg-blue-500">
          <p className=" text-xl  font-bold flex items-center justify-center">
            الحركة المالية
          </p>
          <BadgeDollarSign size={40} />
        </div>
        <div className="w-full flex flex-col items-center gap-4 p-2">
          <div className="flex w-full gap-4 items-center ">
            <div className="flex flex-col w-1/2">
              <p>قبض</p>
              <Link
                href={"/register"}
                className="bg-blue-500 flex-col  gap-1  h-14 rounded-md flex items-center justify-center text-white/80 "
              >
                <Smile size={35} />
              </Link>
            </div>

            <div className="flex flex-col w-1/2">
              <p>صرف</p>
              <Link
                href={"/register"}
                className="bg-red-500  flex-col gap-1   h-14 rounded-md flex items-center justify-center text-white/80 "
              >
                <Frown size={35} />
              </Link>
            </div>
          </div>
          <div className="flex    w-full gap-4 items-center ">
            <Link
              href={"/register"}
              className="bg-blue-500  gap-3 w-full  h-14 rounded-md flex items-center justify-center text-white/80 font-semibold text-xl"
            >
              <p>فاتورة</p>
              <ScrollText size={35} />
            </Link>
            <Link
              href={"/register"}
              className="bg-red-500 w-full  gap-4  h-14 rounded-md flex items-center justify-center text-white/80  font-semibold text-xl"
            >
              <p>مشتريات</p>
              <ShoppingCart size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Invoce = () => {
  return (
    <>
      <Link
        href={"/comments"}
        className="bg-orange-400  gap-4 w-10/12 h-14 rounded-md flex items-center justify-center text-white/80"
      >
        رايك يهمنا
        <MessageCircle />
      </Link>
    </>
  );
};

const Purchace = () => {
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center bg-yellow-300 text-2xl px-4 py-1 rounded-md  border-4 border-dashed border-blue-400 shadow-lg lg:flex-row w-[80%]">
        <p className="text-xl text-foreground font-bold   ">
          الصحفي لصيانة السيارات
        </p>
        <p className="text-lg">تحت اشراف المهندس</p>
        <p className="text-xl font-bold">معاذ الشريف</p>
        <p>جوال : 0509723508</p>
      </div>
    </>
  );
};