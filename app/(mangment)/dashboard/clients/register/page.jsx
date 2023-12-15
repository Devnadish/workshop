"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
import { toast } from 'react-hot-toast';
import Submit from "@/components/shared/Submit";
import PageTitle from "@/components/shared/PageTitle";
import { Mail, Phone, User } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import Image from "next/image";
import { Input } from "@/components/ui/input";



function RegisterPage() {
  const [CID, SETCID] = useState("");
   const [image, setImage] = useState(null);
     const fileInputRef = useRef(null);

     const handleImageChange = (event) => {
       // Handle image selection and update the 'image' state
       const selectedImage = event.target.files[0];
       setImage(selectedImage);
     };

  const handleNewClient = () => {
    document.getElementById("newClientForm").reset();
  };

  const handleSubmit = async (data) => {
    const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");
    const newClient = {
      name,
      mobile,
      email,
    };
    const validation = validateForm(newClient);
    console.log(validation);
    if (!validation.isValid) {
toast.error(validation.errorMessage)
      return;
    }

    try {
      const result = await addClient(newClient);
      SETCID(result.clientId);
      toast.success(result.msg, { duration: 4000, position: "bottom-center" });
    } catch (error) {
      // Handle any errors that occur during API call or other operations
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <PageTitle title={"تاسيس عميل جديد"} icon={<User />} />
      <form
        action={handleSubmit}
        id="newClientForm"
        className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center"
      >
        <div className="border px-4 rounded-md py-1 bg-black/30 flex items-center gap-4">
          <p>رقم العميل</p>
          <p className="font-bold text-2xl">{CID}</p>
        </div>
        <INPUT
          type="text"
          name="name"
          placeholder="اسم العميل"
          icon={<User />}
        />
        <INPUT
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          icon={<Phone />}
          maxlength="10"
        />
        <INPUT
          type="email"
          name="email"
          placeholder="الايميل"
          icon={<Mail />}
        />
        <div className="flex flex-col gap-3">
          <label htmlFor="imageUpload">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
            ) : (
              <img src="/assets/noavatar.png" alt="Placeholder Image" />
            )}
          </label>
          <input
            type="file"
            id="imageUpload"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <Button onClick={() => fileInputRef.current.click()} type="button">
            صورة العميل
          </Button>
        </div>

        <div className="flex items-center justify-around w-full">
          <Submit />
          <Button onClick={handleNewClient} type="button">
            جديد
          </Button>
        </div>
      </form>
    </>
  );
}


export default RegisterPage;
