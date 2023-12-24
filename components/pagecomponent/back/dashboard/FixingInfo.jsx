
const FixingInfo = ({
  sumOf_OPEN_FixingCard,
  sumOf_CLOSED_FixingCard,
  cardTotal,
  cardRecived,
  cardNet,
}) => {
  return (
    <div className="text-black flex-col font-tajawal font-normal flex items-center justify-between  text-black gap-3 py-1 w-full min-h-full">
      <div className="w-full flex items-center justify-around ">


        <div className="flex border items-center  justify-center  text-white    rounded">
          <div className="flex items-center flex-col justify-center   px-1 py-1 rounded">
            <p>الاجمالي </p>
            <p className="border-t w-full text-center py-1">{cardTotal} </p>
          </div>

          <div className="flex r items-center flex-col justify-center  px-1.5 py-1 rounded">
            <p>المستلم </p>
            <p className="border-t w-full text-center py-1">{cardRecived} </p>
          </div>
        </div>



        <div className="flex border items-center flex-col justify-center  text-white px-3 py-1 rounded bg-red-500">
          <p>المتبقي </p>
          <p className="border-t w-full text-center py-1">{cardNet} </p>
        </div>
      </div>

      <div className="w-full bg-orange-500 text-white flex flex-col gap-2 w-[95%] rounded">
        <div className= "bg-yellow-300 text-black text-lg font-tajawal text-lg flex items-center justify-between w-full px-3 ">
          <p>الكروت المفتوحة</p>
          <p className="bg-red-600 text-white rounded px-3">
            {sumOf_OPEN_FixingCard.recordCount}
          </p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_OPEN_FixingCard.totalSum}</p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p> المستلم </p>
          <p className="flex items-center justify-center ">
            {sumOf_OPEN_FixingCard.receiveSum}
          </p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p>المتبقي </p>
          <p>{sumOf_OPEN_FixingCard.remaining}</p>
        </div>
      </div>
      <div className="w-full bg-green-800 text-black flex flex-col gap-2  w-[95%] rounded">
        <div className="bg-yellow-300 text-black text-lg font-tajawal text-lg flex items-center justify-between w-full px-3">
          <p>المغلقة</p>
          <p className="bg-red-600 text-white rounded px-3">
            {sumOf_CLOSED_FixingCard.recordCount}
          </p>
        </div>
        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_CLOSED_FixingCard.totalSum}</p>
        </div>

        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي المستلم </p>
          <p>{sumOf_CLOSED_FixingCard.receiveSum}</p>
        </div>

        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_CLOSED_FixingCard.remaining}</p>
        </div>
      </div>
    </div>
  );
};
export default FixingInfo;
