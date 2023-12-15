"use client"
import React from "react";
import { Car, LogIn, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
function Footer() {
  return (
    <footer className="sticky max-w-6xl  bottom-0 left-0 flex  items-center w-full  justify-between px-4 bg-orange-500 h-16 z-50  ">
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      <Link
        href={"/report"}
        className="flex items-center gap-4 text-primary-foreground border rounded-md px-4 bg-primary shadow-md"
      >
        <Car size={34} />
        <p>تقريري</p>
      </Link>
      <Button
        onClick={() => (window.location.href = "tel:1234567890")}
        className="border w-12 h-12 rounded-full flex items-center justify-center bg-yellow-300 shadow-lg text-black"
      >
        <PhoneCallIcon size={45}/>
      </Button>
      <Link
        href={"/login"}
        className="flex items-center gap-4  border rounded-md px-4 bg-destructive  text-primary-foreground  shadow-md py-2 "
      >
        <p>دخول</p>
        <LogIn size={25} className="text-white" />
      </Link>
    </footer>
  );
}

export default Footer;
