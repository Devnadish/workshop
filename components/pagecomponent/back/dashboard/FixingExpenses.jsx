const FixingExpenses = ({ MaintenanceExpensesArray  }) => {
    function calculateSumOfAmounts(ReceptArray) {
      let sum = 0;
      for (let i = 0; i < ReceptArray.length; i++) {
        sum += ReceptArray[i].amount;
      }
      return sum;
    }
    const sum = calculateSumOfAmounts(MaintenanceExpensesArray);
  return (

      <div className="flex flex-col gap-3 w-full bg-sky-300">

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
      <div className="flex  gap-3 w-full bg-green-500 h-10  items-center justify-center text-xl font-bold text-white">
        <p>الاجمالي</p>
        <p>{sum}</p>
      </div>
      </div>

  );
};

export default FixingExpenses;
