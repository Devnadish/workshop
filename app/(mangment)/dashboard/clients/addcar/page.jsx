"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Check, Send } from "lucide-react";
import { AddNewCar, checkClientByIDExists } from "@/db/clients";
import { toast } from "react-hot-toast";
import Submit from "@/components/shared/Submit";
import { validateForm } from "@/lib/validation/addCar";


function AddCar() {
  const [client, setClient] = useState("");
  const [ClientCode, setClientCode] = useState("");
  const [isClient, setIsClient] = useState(false)
  const [clientId, setClientId] = useState()

  const getClientInfo = async () => {
    const check = await checkClientByIDExists(ClientCode);
    if (check) {
      setClient(check.name);
      setClientId(check.id)
      setIsClient(true);
    } else {
      toast.error("العميل غير موجود");
      setIsClient(false);
      setClient("");
      setClientId("")
    }
  }

  const handleSubmit = async (data) => {
    const carName = data.get("carName");
    const Model = data.get("Model");
    const color = data.get("color");
    const CarNo = data.get("CarNo");
    const BodyNo = data.get("BodyNo");
    const car = {
      carName,
      Model,
      color,
      CarNo,
      BodyNo,
      clientId: parseInt(ClientCode),
      clientName: client,
      CId: clientId,
    };

    const validation = validateForm(car);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }
    const result = await AddNewCar(car);
    toast.success(result);
    return;
  };

  return (
    <>
      <span className="border border-primary-foreground/30 rounded-md px-8 py-2 w-10/12 mt-3 flex items-center justify-center text-2xl bg-primary/50 gap-4 shadow-lg text-primary-foreground/50 mb-4 ">
        اضافة سيارة
        <Car />
      </span>

      <div className="flex items-center gap-4">
        <Input
          type="text"
          name="cliend"
          placeholder="رقم العميل"
          value={ClientCode}
          onChange={(e) => setClientCode(e.target.value)}
          title={"الاسم "}
          required
        />
        <Button onClick={() => getClientInfo()}>
          <Check />
        </Button>
      </div>
      <p className="bg-white/30 p-2 w-full rounded-md mt-2">{client}</p>

      {isClient && (
        <form
          action={handleSubmit}
          className="flex flex-col gap-4 p-4 w-full  text-white "
        >
          <Input
            type="text"
            name="carName"
            placeholder="نوع السيارة"
          />
          <div className="flex items-center justify-center gap-4">
            <Input
              type="text"
              name="Model"
              placeholder="موديلها"
            />

            <Input
              type="text"
              name="CarNo"
              placeholder="رقم اللوحة"
            />
          </div>
          <Input
            type="text"
            name="BodyNo"
            placeholder="رقم الشاصي"
          />
          <Input
            type="text"
            name="color"
            placeholder="اللون"
          />
          <Submit />
        </form>
      )}
    </>
  );
}

export default AddCar;
