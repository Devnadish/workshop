// "use client"
import {
  Receipt, Wrench,
} from "lucide-react";
import Link from "next/link";
import InfoBox from "@/components/pagecomponent/back/dashboard/InfoBox";
import { calculateClientRecipts, calculateClientSums } from "@/db/dashboard";

export default async function Home() {
  const MaintenanceExpensesArray = await calculateClientSums();
  const ReceptArray = await calculateClientRecipts();

  console.log(MaintenanceExpensesArray);
  console.log(ReceptArray);




  //  const analytics = useAnalytics();
  return (
    // <main>
    <main className=" flex  flex-wrap   gap-6 items-start justify-center p-4   w-full   ">
      {/* <h1>Visitors: {analytics.totalVisits}</h1> */}
      <InfoBox title="مصاريف تشقيلية" tileIcon={<Receipt />}>
        <MaintenanceExpenses
          MaintenanceExpensesArray={MaintenanceExpensesArray}
          ReceptArray={ReceptArray}
        />
      </InfoBox>
      <InfoBox title="ملخص النقدية" tileIcon={<Receipt />}>
        <Finice />
      </InfoBox>
      <InfoBox title="كروت الصيانة" tileIcon={<Wrench />}>
        <Fixing />
      </InfoBox>

      <InfoBox title="تفاعل العملاء" tileIcon={<Receipt />}>
        <ClientAction />
      </InfoBox>
      <InfoBox title="معلومات عامة" tileIcon={<Receipt />}>
        <GeneralInfo />
      </InfoBox>
    </main>
  );
}

const MaintenanceExpenses = ({ MaintenanceExpensesArray, ReceptArray }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 w-full bg-orange-300">
        <p className="bg-orange-400 text-black h-8 flex items-center justify-center w-full text-lg font-semibold">
          المستلم من العملاء
        </p>
        {ReceptArray.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full text-black px-3"
            >
              <p>{item.fromName}</p>
              <p>{item.amount}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 w-full bg-sky-300">
        <p className="bg-sky-400 text-black h-8 flex items-center justify-center w-full text-lg font-semibold">
          المصاريف التشغيلية
        </p>
        {MaintenanceExpensesArray.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full text-black px-3"
            >
              <p>{item.fromName}</p>
              <p>{item.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};




const Finice = () => {
  return (
    <div className="text-black flex-col font-tajawal w-full font-normal flex items-center justify-between px-3 text-black gap-3 py-1">
      <div className="flex items-center justify-between w-full text-white px-3">
      <p>اجمالي الايرادات</p>
      <p >50000</p>
      </div>


      <div className="flex items-center justify-between w-full text-white px-3">
      <p>اجمالي القبض</p>
      <p >50000</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 bg-red-500 text-white ">
      <p>رصيد العملاء</p>
      <p >50000</p>
      </div>


       <div className="flex items-center justify-between w-full text-red-600 px-3">
      <p>اجمالي الصرف التشغيلي</p>
      <p>50000</p>
      </div>

       <div className="flex items-center justify-between w-full text-red-600 px-3">
      <p>اجمالي الصرف الاداري</p>
      <p>50000</p>
      </div>

       <div className="flex items-center justify-between w-full text-red-600 px-3">
      <p>اجمالي  المشتريات</p>
      <p>50000</p>

      </div>
      <div className="flex items-center justify-between w-full bg-green-600 text-white px-3 rounded py-1">
      <p>الصافي</p>
      <p>50000</p>
      </div>
    </div>
  );
};

const Fixing = () => {
  return (
    <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between  text-black gap-3 py-1 w-full min-h-full">
      <div className="flex items-center justify-between w-full text-white px-3 ">
        <p>عدد الكروت المفتوحة</p>
        <p>15</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p>الاجمالي </p>
        <p>50000</p>
      </div>
      <div className="flex items-center justify-between w-full bg-green-600 px-3  text-white ">
        <p>المستلم</p>
        <p>50000</p>
      </div>


      <div className="flex items-center justify-between w-full bg-red-600 text-white px-3 rounded py-1">
        <p>المتبقي</p>
        <p>50000</p>
      </div>
    </div>
  );
};



const ClientAction = () => {
  return (
    <>
      <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between px-3  text-black gap-1 py-1 w-full">
        <div className="flex items-center justify-between w-full text-white ">
          <p>اجمالي التعليقعات </p>
          <p >22</p>
        </div>
        <div className="flex items-center justify-between w-full text-white  border-b-2 border-green-600">
          <p>التعليقات المعلقة</p>
          <p className=" text-red-600 ">111</p>
        </div>

        <div className="flex items-center justify-between w-full text-white  rounded  ">
          <p>عدد الاقتراحات</p>
          <p  >2</p>
        </div>
        <div className="flex items-center justify-between w-full text-white rounded  border-b-2 border-green-600">
          <p>عدد الاقتراحات المعقة</p>
          <p className=" text-red-600 ">3</p>
        </div>
        <div className="flex items-center justify-between w-full text-white rounded ">
          <p>
            عدد الشكاوي
          </p>
          <p  >181</p>
        </div>
        <div className="flex items-center justify-between w-full text-white  rounded ">
          <p>عدد الشكاوي المعلقه</p>
          <p className=" text-red-600 ">181</p>
        </div>
      </div>

      {/* <Link
          className="bg-sky-500 px-3 py-2 rounded flex flex-col items-center"
          href={"/dashboard/clients/comment"}
        >
          <p>النعليقات</p>
          <p>50</p>
        </Link>
        <Link
          className="bg-sky-500 px-3 py-2 rounded flex flex-col items-center"
          href={"/dashboard/clients/suggestion"}
        >
          <p>الاقتراحات</p>
          <p>5</p>
        </Link>
        <Link
          className="bg-sky-500 px-3 py-2 rounded flex flex-col items-center"
          href={"/dashboard/clients/complain"}
        >
          <p>الشكاوي</p>
          <p>8</p>
        </Link> */}
    </>
  );
};
const GeneralInfo = () => {
  return (
    <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between  text-black gap-3 py-1 w-full">
      <div className="flex items-center justify-between w-full text-white px-3 ">
        <p>عدد العملاء</p>
        <p>15</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p>عدد السيارات </p>
        <p>22</p>
      </div>
      <div className="flex items-center justify-between w-full text-white ">
        <p>عدد كروت الصيانة</p>
        <p>111</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد الكروت الملغية</p>
        <p>2</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد الكروت المفتوحة</p>
        <p>3</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد الكروت المغلقة</p>
        <p>181</p>
      </div>
    </div>
  );
};
