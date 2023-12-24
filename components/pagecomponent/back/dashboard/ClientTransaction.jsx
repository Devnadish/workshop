

import { ScrollArea } from "@/components/ui/scroll-area";


const ClientTransaction = ({  ReceptArray }) => {


  function calculateSumOfAmounts(ReceptArray) {
    let sum = 0;
    for (let i = 0; i < ReceptArray.length; i++) {
      sum += ReceptArray[i].amount;
    }
    return sum;
  }
  const sum = calculateSumOfAmounts(ReceptArray)


  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 w-full bg-orange-300  items-center justify-center ">
        <p className="bg-orange-400 text-black h-8 flex items-center justify-center w-full text-lg font-semibold">
          المستلم من العملاء
        </p>
        <div className="flex flex-col gap-4 px-4 w-full max-h-50 overflow-y-auto">
          {/* <ScrollArea className="h-50 "> */}
            {ReceptArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between w-full text-black px-3"
                >
                  <p>{item.amount}</p>
                  <p>{item.fromName}</p>
                </div>
              );
            })}
          {/* </ScrollArea> */}
        </div>
      </div>
      <div className="flex  gap-3 w-full bg-green-500 h-10  items-center justify-center text-xl font-bold text-white">
        <p>الاجمالي</p>
        <p>{sum}</p>
      </div>
    </div>
  );
};

export default ClientTransaction;
