


const FininceInfo = ({
  totalIncome,
  clientBalance,
  reciptSum,
  mangmentExp,
  fixingExp,
  net,
}) => {
  return (
    <div className="text-black flex-col   w-full font-normal flex items-center justify-between px-3 text-black gap-3 py-1">
      <div className="flex items-center justify-between w-full text-white px-3">
        <p> الايرادات</p>
        <p>{totalIncome}</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p> القبض</p>
        <p>{reciptSum}</p>
      </div>
      <div className="flex items-center justify-between w-full text-white px-3 bg-red-500 text-white font-bold text-xl h-12">
        <p>رصيد العملاء</p>
        <p>{clientBalance}</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p>المصاريف التشغيليه</p>
        <p>{fixingExp}</p>
      </div>

      <div className="flex items-center justify-between w-full text-white px-3">
        <p>المصاريف الادارية</p>
        <p>{mangmentExp}</p>
      </div>
      <div className="flex items-center justify-between w-full bg-green-600 text-white px-3 rounded py-1 h-12 text-xl">
        <p>الصافي</p>
        <p className="bg-green-800 px-3 rounded-lg py-1 font-bold">{net}</p>
      </div>
    </div>
  );
};
export default FininceInfo
