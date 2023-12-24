import React from 'react'







const GeneralInfo = ({ generalInfoData }) => {

  return (
    <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between  text-black gap-3 py-1 w-full">
      <div className="flex items-center justify-between w-full text-white px-3 ">
        <p>عدد العملاء</p>
        <p>{generalInfoData.ClientRecord}</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p>عدد السيارات </p>
        <p>{generalInfoData.CartRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 ">
        <p>عدد كروت الصيانة</p>
        <p>{generalInfoData.fixingOrdertRecord}</p>
      </div>


      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد الكروت المفتوحة</p>
        <p>{generalInfoData.openFixingOrdertRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد سندات القبض</p>
        <p>{generalInfoData.RecietVouchertRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 rounded py-1">
        <p>عدد سندات الصرف</p>
        <p>{generalInfoData.PaymentVouchertRecord}</p>
      </div>

    </div>
  );
};
export default GeneralInfo
