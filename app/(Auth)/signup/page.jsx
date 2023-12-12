"use client"
import { Smile } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here with name and mobile

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-gray-800 shadow-md rounded-md p-6 text-white">
        <div className="flex items-baseline justify-center  gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">مرحبا بك</h2>
        <Smile/>

        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-2"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-300 font-medium mb-2"
            >
              رقم الجوال
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={handleMobileChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
