"use client";
import React, { useState } from "react";
import { Menu, ChevronLeft, ChevronRight, HomeIcon } from "lucide-react";
import ClientMenu from "./ClientMenu";
import FixOrderMenu from "./FixOrderMenu";
import FinicalMenu from "./FinicalMenu";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
      <div
        className={`hidden md:flex md:flex-col transform max-h-[80vh] overflow-auto bg-sky-800 transition duration-500 ${
          isOpen ? "w-60" : "w-8"
        }`}
      >
        <div>
          <button onClick={toggleSidebar}>
            {!isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className={isOpen ? "block" : "hidden"}>
          <SidebarMenu />
        </div>
      </div>

      {/* Use burger menu on mobile */}
      <div className="flex absolute top-0 z-50 md:hidden">
        {/* Display sidebar contents when open */}
        <Sheet open={isOpen} onOpenChange={setIsOpen} onClose={toggleSidebar}>
          <SheetTrigger asChild>
            <Button variant="outline" className="border-none">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-auto bg-sky-800 ">
            <SidebarMenu toggleSidebar={closeSidebar} />
          </SheetContent>
        </Sheet>
        {/* <div
          className={` fixed md:hidden bg-gray-800 h-full w-72 duration-500 ease-in ${
            isOpen ? "left-0" : "-left-full"
          }`}
        >
          <SidebarMenu />
        </div> */}
      </div>
    </div>
  );
};

const SidebarMenu = ({ toggleSidebar }) => (
  <div className="mt-4 flex flex-col gap-2 ">
    <ClientMenu toggleSidebar={toggleSidebar} />
    <FixOrderMenu toggleSidebar={toggleSidebar} />
    <FinicalMenu toggleSidebar={toggleSidebar} />
  </div>
);

export default DashBoardMenu;
