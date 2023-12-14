"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";




const INPUT = ({
  icon,
  placeholder,
  type = "text",
  name,
  cN,
  ...setting
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative flex-1 border rounded-sm overflow-hidden ${
        isFocused ? "focus-within:border-green-500" : ""
      }`}
    >
      <Input
        type={type}
        name={name}
        className={`input-placeholder  border-0 h-7 rounded-none text-sm   bg-white pl-3 ${
          icon ? "pr-12" : "pr-2"
        } py-2 w-full text-black/80 font-medium focus:outline-none`}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...setting}
        style={{ "::placeholder": { color: "red", fontSize: "1rem" } }}
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-[40px] pointer-events-none bg-gray-700">
          {icon}
        </div>
      )}
    </div>
  );
};



export default INPUT
