import {
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  UserPlus,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    // <main>
    <main className="flex  flex-col  gap-6 items-center justify-start px-4 py-3   w-full   ">
      <div className="relative container w-full flex flex-col items-center justify-center">
        <Hero />
        <About />
      </div>
      <Intro />
      <Services />

      {/* <Register /> */}
      {/* <Comment /> */}
      {/* <SuperVision /> */}
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
let stylX =
  "w-16 flex-col gap-2  bg-orange-400 rounded-full  h-16  flex items-center justify-center text-slate-800 text-bold";

  return (
    <>
      <div className="absolute -bottom-7 w-10/12 h-16 rounded-md flex gap-4 items-center justify-between text-white/80 ">
        <Link href={"/service"} className={stylX}>
          {/* خدماتنا */}
          <Wrench size={30} />
        </Link>
        <Link href={"/location"} className={stylX}>
          {/* موقعنا */}
          <MapPin size={30} />
        </Link>
        <Link href={"/gallary"} className={stylX}>
          {/* لحظاتنا */}
          <ImageIcon size={30} alt="khalid nadish" />
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
      <div className="flex flex-col  gap-1 items-center justify-center bg-yellow-300 text-xl px-4 py-1 rounded-md  border-4 border-dashed border-blue-400 shadow-lg  w-full">
        <p className="text-xl text-foreground font-bold   ">
          الصحفي لصيانة السيارات
        </p>
        <p className="text-md">تحت اشراف المهندس</p>
        <p className="text-xl font-bold">معاذ الشريف</p>
        <p>جوال : 0509723508</p>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <Image
        src="/gallary/2.jpg"
        width={357}
        height={200}
        alt="ورشة الصحفي لصيانة السيارات"
        priority
        className=" border  border-orange-400 rounded"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </>
  );
};

const Intro = () => {
  return (
    <>
      <div className="container flex items-center justify-center flex-col bg-white shadow-xl rounded-lg  mt-10 p-4 text-black ">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl font-extrabold">سيارتك مركز اهتمامنا</p>
          <Image
            src="/gallary/vector.jpg"
            width={80}
            height={100}
            alt="ورشة الصحفي لصيانة السيارات"
            // priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h1 className="font-extrabold">
          بغض النظر عن المشكلة، فإن فريقنا . يأخذ الوقت الكافي للاستماع إليك
          حقًا، عميلنا العزيز. نحن نقدم عمليات فحص رقمية بأحدث الاجهزه حتى تتمكن
          من فهم المشكلات التي نراها تمامًا وتشعر بالثقة في جميع قرارات
          إصلاح/خدمة السيارات الخاصة بك. نحن نعلم قيمة العمل الجاد، لأننا لن
          نرتاح حتى تؤدي سيارتك الأداء الأمثل. حدد موعدًا اليوم لإصلاح أو صيانة
          السيارات. نحن موجودون في مكان مناسب في جده شارع فلسطين تقاطع الصحافة
          وساعات العمل لدينا هي من السبت إلى الجمعة: 9:00 صباحًا إلى 11:00
          مساءً، الجمعة : لعد صلاة العصر.
        </h1>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="mb-16">
        <Image
          src="/gallary/serveis.jpg"
          width={357}
          height={200}
          alt="ورشة الصحفي لصيانة السيارات"
          // priority
          className=" border  border-orange-400 rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
};
