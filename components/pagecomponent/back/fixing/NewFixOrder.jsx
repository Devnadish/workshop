"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Submit from "@/components/shared/Submit";
import { newFixingOrder } from "@/db/fixing";
import { saveRecietVoucher, updateClientReceiptBalance } from "@/db/reciet";
import DocementNO from "@/components/shared/DocementNO";
import PageTitle from "@/components/shared/PageTitle";
import { PiEngineDuotone } from "react-icons/pi";
import toast from "react-hot-toast";
import ClientWithCar from "@/components/shared/ClientWithCar";
import { validateForm } from "@/lib/validation/fixing";
import INPUT from "@/components/shared/INPUT";
import { BiHardHat } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";

function NewFixOrder({ clientsWithCars }) {
  const [totalCost, setTotalCost] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);

  const [dueAmount, setDueAmount] = useState(totalCost - receivedAmount);
  const [FixCardNO, setFixCardNO] = useState(0);
  const [ClientID, setClientID] = useState("");
  const [ClientName, setClientName] = useState("");
  const [Carid, setCarid] = useState("");

  // -----------------------------------------------------------------
  const FixOrder_DBaction = async (orderData, ClientID, total) => {
    try {
      const [AddFixing, UpdateClientBalance] = await Promise.all([
        newFixingOrder(orderData),
        updateClientReceiptBalance(parseInt(ClientID), parseInt(total)),
      ]);

      if (AddFixing.exisit) {
        toast.error(AddFixing.msg);
        return "haveCard";
      } else {
        toast.success(AddFixing.msg);
        toast.success(UpdateClientBalance.msg);
        // toast.success(UpdateClientBalance.msg);
        return "done";
      }
    } catch (error) {
      toast.error(`An error occurred: ${error}`);
    }
  };

  // ---------------------------------------------------------------
  const NewDoc = () => {
    document.getElementById("fixingForm").reset();

    setDueAmount(0);
  };

  const handlesubmit = async (data) => {
    const detail = data.get("serviceDescription");
    const delivery = data.get("deliveryDate");
    // const total = data.get("totalCost");
    // const receive = parseInt(data.get("receivedAmount"));
    const engName = data.get("engName");
    const orderData = {
      detail,
      delivery,
      total: parseInt(totalCost),
      receive: parseInt(receivedAmount),
      clientId: parseInt(ClientID),
      clientName: ClientName,
      selectedCar: Carid,
      engName,
    };

    const validation = validateForm(orderData);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    const DONE = await FixOrder_DBaction(orderData, ClientID, totalCost);


  };

  useEffect(() => {
    setDueAmount(totalCost - receivedAmount);
  }, [totalCost, receivedAmount]);

  return (
    <div className="container flex items-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center  w-full gap-3 bg-white/20 mt-4 p-2 ">
        <PageTitle
          title=" كرت اصلاح جديد"
          icon={
            <PiEngineDuotone
              size={40}
              className="text-orange-600 animate-pulse "
            />
          }
          bgColor="bg-white/30"
        />
        <DocementNO DocID={FixCardNO} />
        <ClientWithCar
          custmer={clientsWithCars}
          ClientID={ClientID}
          setClientID={setClientID}
          ClientName={ClientName}
          setClientName={setClientName}
          Carid={Carid}
          setCarid={setCarid}
        />
      </div>

      <form
        action={handlesubmit}
        id="fixingForm"
        className="flex flex-col items-center justify-center  w-full gap-3 bg-gray-800 p-2 mb-4 "
      >
        <Textarea
          placeholder="الخدمة المطلوبة"
          rows={5}
          name="serviceDescription"
        />
        <div className="flex items-center flex-col gap-2">
          <INPUT placeholder="المهندس" name="engName" icon={<BiHardHat />} />
          <INPUT
            placeholder="موعد التسليم"
            name="deliveryDate"
            icon={<FaCalendarCheck />}
          />
        </div>

        <div className="flex  gap-4 border flex-col border-white/30  p-4 rounded-md w-12/12">
          <INPUT
            placeholder="التكلفة الاجمالية"
            type="number"
            name="totalCost"
            onChange={(event) => setTotalCost(event.target.value)}
            bgColor="bg-red-300"
            icon={<FaCashRegister />}
          />
          <INPUT
            placeholder="المبلغ المستلم"
            type="number"
            name="receivedAmount"
            value={receivedAmount}
            onChange={(event) => setReceivedAmount(event.target.value)}
            bgColor="bg-blue-300"
            icon={<BsCashStack />}
          />

          <INPUT
            placeholder="المتبفيى"
            value={dueAmount}
            disabled
            onChange={(event) => setDueAmount(event.target.value)}
            icon={<FaBalanceScale />}
          />
        </div>

        <div className="flex items-center  justify-between w-full">
          <Submit />
          <Button onClick={() => NewDoc()} type="button">
            جديد
          </Button>
        </div>
      </form>
    </div>
  );
}
export default NewFixOrder;
