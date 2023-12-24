



const ClientActionInfo = ({ ClientActions }) => {
  return (
    <>
      <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between px-3  text-black gap-1 py-1 w-full">
        <div className="flex items-center justify-between w-full text-white ">
          <p>اجمالي التعليقعات </p>
          <p>{ClientActions.visibleComments}</p>
        </div>
        <div className="flex items-center justify-between w-full text-white  border-b-2 border-green-600">
          <p>التعليقات المعلقة</p>
          <p className=" text-red-600 ">{ClientActions.pendingComments}</p>
        </div>

        <div className="flex items-center justify-between w-full text-white  rounded  ">
          <p>عدد الاقتراحات</p>
          <p>{ClientActions.visibleSuggestions}</p>
        </div>
        <div className="flex items-center justify-between w-full text-white rounded  border-b-2 border-green-600">
          <p>عدد الاقتراحات المعلقة</p>
          <p className=" text-red-600 ">{ClientActions.pendingSuggestions}</p>
        </div>
        <div className="flex items-center justify-between w-full text-white rounded ">
          <p>عدد الشكاوي</p>
          <p>{ClientActions.visibleComplains}</p>
        </div>
        <div className="flex items-center justify-between w-full text-white  rounded ">
          <p>عدد الشكاوي المعلقه</p>
          <p className=" text-red-600 ">{ClientActions.pendingComplains}</p>
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
export default ClientActionInfo;
