"use client";
import React, { useState } from "react";
import { Menu, ChevronLeft, ChevronRight, HomeIcon } from "lucide-react";
import ClientMenu from "./ClientMenu";
import FixOrderMenu from "./FixOrderMenu";
import FinicalMenu from "./FinicalMenu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaCarCrash } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";

const DashBoardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    const closeSidebar = () => {
      setIsOpen(false);
    };


  return (
    <div className="flex relative">
      <div className="flex absolute top-0 z-50 ">
        <Sheet open={isOpen} onOpenChange={setIsOpen} onClose={toggleSidebar}>
          <SheetTrigger asChild>
            <Button variant="outline" className="bg-yellow-300  px-2 h-10  mt-2 mr-2" size="sm">
              <ChevronLeft className="text-black"/>
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-auto bg-sky-800 ">
            <SidebarMenu toggleSidebar={closeSidebar} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const SidebarMenu = ({ toggleSidebar }) => (
  <div className="mt-4 flex flex-col gap-2 ">
    <FastMenu toggleSidebar={toggleSidebar} />
    <ClientMenu toggleSidebar={toggleSidebar} />
    <FixOrderMenu toggleSidebar={toggleSidebar} />
    <FinicalMenu toggleSidebar={toggleSidebar} />
  </div>
);

export default DashBoardMenu;

const FastMenu = ({ toggleSidebar }) => {
  const linkStyle="w-1/3  rounded h-20  shadow-lg text-white flex flex-col items-center justify-center text-xl"
  return (
    <div className="flex w-full items-center justify-around">
      <Link
        href={"/dashboard/fixing/neworder"}
        className={`${linkStyle} bg-teal-500`}
        onClick={() => toggleSidebar()}
        prefetch={true}
      >
        <FaCarCrash size={40} className="text-yellow-300" />
        {/* كرت صيانة */}
      </Link>
      <Link
        href={"/dashboard/finince/fixpayment"}
        onClick={() => toggleSidebar()}
        prefetch={true}
        className={`${linkStyle} bg-yellow-300`}
      >
        <FaCashRegister size={40} className="text-red-500" />
      </Link>
      {/* <Link href={"/dashboard"}>كرت صيانة</Link> */}
    </div>
  );
};
