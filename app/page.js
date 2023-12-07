import { Image, MapPin, MessageCircle, UserPlus, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    // <main>
    <main className="flex  flex-col  gap-6 items-center justify-center px-4 py-3   w-full   ">
      <Register />
      <About />
      <Comment />
      <SuperVision />
    </main>
  );
}

const Register = () => {
  return (
    <>
      <Link
        href={"/signup"}
        className="bg-orange-400  gap-4 w-10/12 h-16 rounded-md flex items-center justify-center text-white/80 min-w-sm"
      >
        تسجيل
        <UserPlus />
      </Link>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="w-10/12 h-16 rounded-md flex gap-4 items-center justify-between text-white/80 ">
        <Link
          href={"/service"}
          className="w-1/3 flex-col gap-2  bg-orange-400 h-20 rounded-md flex items-center justify-center text-white/80 text-bold"
        >
          خدماتنا
          <Wrench size={34} />
        </Link>
        <Link
          href={"/location"}
          className="w-1/3 bg-orange-400  gap-2  flex-col h-20 rounded-md flex items-center justify-center text-white/80"
        >
          موقعنا
          <MapPin size={34} />
        </Link>
        <Link
          href={"/gallary"}
          className="w-1/3 bg-orange-400 gap-2 h-20 flex-col rounded-md flex items-center justify-center text-white/80"
        >
          لحظاتنا
          <Image size={34} alt="khalid nadish" />
        </Link>
      </div>
    </>
  );
};

const Comment = () => {
  return (
    <>
      <Link
        href={"/comments"}
        className="bg-orange-400  gap-4 w-10/12 h-16 rounded-md flex items-center justify-center text-white/80"
      >
        رايك يهمنا
        <MessageCircle />
      </Link>
    </>
  );
};

const SuperVision = () => {
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
