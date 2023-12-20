import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    // <div className='flex flex-col items-center justify-between'>

    <div
      style={{
        backgroundImage: `url("/images/muad.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
      className="flex items-end  justify-center"
    >
      <div className="flex flex-col items-center justify-center bg-white/50 text-sky-700 w-10/12 rounded-md mb-10 gap-1 border">
        <p className="text-3xl font-extrabold text-center bg-sky-400 px-4 text-white rounded-lg mt-2">
          انا معاذ الشريف
        </p>
        <p className="text-xl font-semibold text-center ">
          امتلك من الخبرة في مجال ميكانيكا السيارات مايزيد عن 15 سنة
        </p>
        <p className="text-xl">انا معاذ الشريف</p>
        <p className="text-xl  text-center">
          اجيد فحص السيارت بالكمبيوتر لجميع انواع السيارات
        </p>
        <p className="text-xl font-extrabold bg-sky-400 px-4 text-white rounded-lg mb-4">
          للتواصل جوال : 0509723508
        </p>
      </div>
    </div>

    // <div className="relative w-full">
    //   <div className="absolute top-0 z-10  w-full">
    //     <Image
    //       src={"/images/m1.jpg"}
    //       width={0}
    //       height={0}
    //       style={{ width: "100%", height: "auto" }}
    //       priority
    //       className=" bg-orange-400 rounded-md "
    //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //       alt={"معاذ الشريف ورشة الصحفي"}

    //     />
    //   </div>
    //   <div className="m-auto  py-5 my-10 text-center text-2xl rounded-xl bg-white shadow-[8px_8px_48px_rgba(0,0,0,0.25) z-50 text-black">
    //     hfgh
    //   </div>
    // </div>

    // </div>
  );
}

export default Team
