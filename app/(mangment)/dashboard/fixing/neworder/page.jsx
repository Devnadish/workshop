"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { gerClientByIdForFixing } from "@/db/clients";
import { useToast } from "@/components/ui/use-toast";
import Submit from "@/components/shared/Submit";
import { newFixingOrder } from "@/db/fixing";
import AlertBox from "@/components/shared/AlertBox";
import { Calendar } from "@/components/ui/calendar";

function NewOrder() {
  const { toast } = useToast();
  const [custmer, setCustomer] = useState(0);
  const [carID, setCarID] = useState([]);
  const [custmerName, setCustmerName] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(totalCost - receivedAmount);
  const [selectedCar, setSelectedCar] = useState("");
  const [isSave, setIsSave] = useState(false);
  const [result, setResult] = useState({})
    const [date, setDate] = useState(new Date());


  const handlesubmit = async (data) => {
    const detail = data.get("serviceDescription");
    const delivery = data.get("deliveryDate");
    const total = data.get("totalCost");
    const receive = data.get("receivedAmount");
    const engName = data.get("engName");
      if (!total) {
        toast({
          variant: "blue",
          title: "لايمكن انشاء كرت صيانة بدو قيمة",
        });
        return;
      }
       if (!selectedCar) {
         toast({
           variant: "blue",
           title: "لايمكن انشاء كرت بدون تحديد السيارة",
         });
         return;
       }

    const orderData = {
      detail,
      delivery,
      total: parseInt(total),
      receive: parseInt(receive),
      clientId:parseInt(custmer),
      clientName: custmerName,
      selectedCar,
      engName,
    };
    const AddFixing = await newFixingOrder(orderData);
    if (AddFixing){

 setIsSave(true);
 setResult({
   title: AddFixing.msg,
   fixNO: AddFixing.cardNo,
   fixName: AddFixing.client,
   amt: AddFixing.total,
   reciet: AddFixing.voucher,
 });
  document.getElementById("fixingForm").reset();
  setDueAmount(0);

      //  toast({
      //    variant: "destructive",
      //    title: AddFixing.msg,
      //  });
       return;
    }
    if (AddFixing.err) {
      toast({
        variant: "blue",
        title: AddFixing.err,
      });
      return;
    }

    document.getElementById("fixingForm").reset();
    setDueAmount(0)
  };

  useEffect(() => {
    setDueAmount(totalCost - receivedAmount);
  }, [totalCost, receivedAmount]);

  return (
    <div className="container flex items-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center  w-full gap-3 bg-white/20 mt-4 p-2 ">
        <p className="bg-white/30 rounded-sm text-black text-lg  text-center w-full py-2">
          كرت اصلاح جديد
        </p>
        <ClientCheck
          custmer={custmer}
          setCustomer={setCustomer}
          carID={carID}
          setCarID={setCarID}
          custmerName={custmerName}
          setCustmerName={setCustmerName}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
      </div>
      {carID.length !== 0 ? (
        <form
          action={handlesubmit}
          id="fixingForm"
          className="flex flex-col items-center justify-center  w-full gap-3 bg-gray-800 p-2 mb-4 "
        >
          <Textarea
            placeholder="الخدمة المطلوبة"
            rows={7}
            name="serviceDescription"
          />
          <div className="flex items-center gap-2">
            <Input placeholder="المهندس" name="engName" />
            <Input placeholder="موعد التسليم" name="deliveryDate" />
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow "
            /> */}
          </div>

          <div className="flex  gap-4 border  border-white/30  p-4 rounded-md w-12/12">
            <Input
              placeholder="التكلفة الاجمالية"
              type="number"
              name="totalCost"
              onChange={(event) => setTotalCost(event.target.value)}
            />
            <Input
              placeholder="المبلغ المستلم"
              type="number"
              name="receivedAmount"
              value={receivedAmount}
              onChange={(event) => setReceivedAmount(event.target.value)}
            />

            <Input
              placeholder="المتبفيى"
              value={dueAmount}
              disabled
              onChange={(event) => setDueAmount(event.target.value)}
            />
          </div>
          <Submit />
        </form>
      ) : null}

        <AlertBox open={isSave} setOpen={setIsSave} title={result.title}>
          <div
            className="w-full rounded-lg p-2 bg-blue-700 text-white text-lg font-semibold shadow-xl flex flex-col gap-3 text-right
             outline outline-offset-4 outline-black/50             " >
            <p>
              رقم امر الصيانة  :{" "}
              <span className="bg-white text-black rounded-md px-4 py-1  ">
                {result.fixNO}
              </span>
            </p>
            <p>
              اسم العميل :{" "}
              <span className="bg-white text-black rounded-md px-4 py-1  ">
                {result.fixName}
              </span>
            </p>
            <p>
              المبلغ المستلم :{" "}
              <span className="bg-green-600 text-white rounded-md px-4 py-1  ">
                {result.amt}
              </span>
            </p>
            <p>
              رقم سند القبض  :{" "}
              <span className="bg-white text-black rounded-md px-4 py-1  ">
                {result.reciet}
              </span>
            </p>
          </div>
        </AlertBox>
      </div>

  );
}
export default NewOrder;

const ClientCheck = ({
  custmer,
  setCustomer,
  carID,
  setCarID,
  custmerName,
  setCustmerName,
  selectedCar,
  setSelectedCar,
}) => {
  const { toast } = useToast();

  const getClientInfo = async () => {


    if (custmer === "" || custmer === undefined || custmer === 0) {
      toast({
        variant: "blue",
        title: "اختار رقم للعميل",
      });
      return;
    }

    const check = await gerClientByIdForFixing(parseInt(custmer));
    if (check.stuts === "NotExisit") {
      toast({
        variant: "blue",
        title: check.msg,
      });
    } else {

        setCustmerName(check.client.name);
        setCarID(check.cars);


    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 border  border-white/30  p-4 rounded-md w-full">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center gap-4 w-1/2 ">
            <Input
              placeholder="رقم العميل"
              value={custmer}
              onChange={(event) => setCustomer(event.target.value)}
            />
            <Button
              onClick={getClientInfo}
              className="bg-blue-500 rounded-md h-10 w-10 p-2"
            >
              <Check />
            </Button>
          </div>
          <div className="w-full">
            <select
              value={selectedCar}
              onChange={(event) => setSelectedCar(event.target.value)}
              className="block w-full px-4 py-2 text-gray-100 bg-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a car</option>
              {carID?.map((car) => (
                <option
                  className="text-white"
                  key={car.CarNo}
                  value={car.CarNo}
                >
                  {car.CarNo}/{car.carName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <p>اسم العميل</p>
          <p>{custmerName}</p>
        </div>
      </div>
    </>
  );
};
