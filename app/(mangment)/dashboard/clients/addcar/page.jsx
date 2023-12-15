"use client"
import React, { useState ,useEffect} from "react";
import { Car } from "lucide-react";
import {
  AddNewCar,
  checkClientByIDExists,
  fetchClientNames,
} from "@/db/clients";
import { toast } from "react-hot-toast";
import Submit from "@/components/shared/Submit";
import { validateForm } from "@/lib/validation/addCar";
import INPUT from "@/components/shared/INPUT";
import { GiKeyCard } from "react-icons/gi";
import { RiCalendar2Fill } from "react-icons/ri";
import { SiAdobeindesign as ID } from "react-icons/si";
import { VscColorMode } from "react-icons/vsc";
import ClientSelectComponent from "@/components/shared/ClientSelectComponent";
import PageTitle from "@/components/shared/PageTitle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
function AddCar() {
  const [client, setClient] = useState("");
  const [ClientCars, setClientCars] = useState([]);
  const [clientId, setClientId] = useState()
 const [CLIENTS, setCLIENTS] = useState([]);
 const [CLIENTSloading, setCLIENTSloading] = useState(false);


   const [selectedOption, setSelectedOption] = useState("");


   const handleSelectChange = (e) => {
    //  setSelectedOption(e.target.value);
       setSelectedOption((prevState) => e.target.value);
    //  selectedOption && getClientInfo();
   };

  const getClientInfo = async () => {
    // setCLIENTSloading(false);
    const check = await checkClientByIDExists(selectedOption);
    if (check) {
      setClient(check.name);
      setClientId(check.id)
      setClientCars(check.cars);

    } else {
      toast.error("العميل غير موجود");
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
      clientId: parseInt(selectedOption),
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
useEffect(() => {
  const fetchClientData = async () => {
    setCLIENTSloading(false);
    const data = await fetchClientNames();
    setCLIENTS(data);
      setCLIENTSloading(true);
  };
  fetchClientData();
}, []);

useEffect(() => {
  if (selectedOption) {
    getClientInfo();
  }
}, [selectedOption]);
  return (
    <div className="flex items-center justify-center flex-col w-full ">
      <PageTitle title={"اضافة سيارة"} icon={<Car />} />
      {CLIENTSloading ? (
        <ClientSelectComponent
          options={CLIENTS}
          value={selectedOption}
          onChange={handleSelectChange}
        />
      ) : (
        <p>جاري التحميل  ... </p>
      )}

      {selectedOption && (
        <form
          action={handleSubmit}
          className="flex flex-col gap-4 p-4 w-full  text-white "
          id="Newcar"
        >
          <INPUT
            type="text"
            name="carName"
            placeholder="نوع السيارة"
            icon={<Car />}
          />
          <INPUT
            type="text"
            name="Model"
            placeholder="الموديل"
            icon={<RiCalendar2Fill />}
          />

          <INPUT
            type="text"
            name="CarNo"
            placeholder="رقم اللوحة"
            icon={<ID color={"red"} />}
          />
          <INPUT
            type="text"
            name="BodyNo"
            placeholder="رقم الهيكل"
            icon={<GiKeyCard />}
          />
          <INPUT
            type="text"
            name="color"
            placeholder="اللون"
            icon={<VscColorMode />}
          />
          <div className="flex items-center justify-around">
            <Submit />
            <Button
              type="button"
              onClick={() => document.getElementById("Newcar").reset()}
            >
              جديد
            </Button>
          </div>
        </form>
      )}
      {CLIENTSloading && <ShowCars cars={ClientCars} />}
    </div>
  );
}

export default AddCar;

const ShowCars = ({ cars }) => {
  return (
    <table className="table-auto border-collapse w-full mb-4 ">
      <thead className="bg-green-500 text-white ">
        <tr>
          <th className="bg-green-600 px-1 py-1 w-[40%]">رقم اللوحة</th>
          <th className="bg-green-600 px-1 py-1">النوع</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => {
          const oddRow =
            index % 2 === 0
              ? "bg-gray-50 text-black"
              : "bg-gray-400 text-white";
          return (
            <tr key={car.id} className={oddRow}>
              <td className="border px-1 py-1 text-black">{car.CarNo}</td>
              <td className="border px-1 py-1 text-black">{car.carName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
