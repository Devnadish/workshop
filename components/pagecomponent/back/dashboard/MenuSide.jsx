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
    <ClientMenu toggleSidebar={toggleSidebar} />
    <FixOrderMenu toggleSidebar={toggleSidebar} />
    <FinicalMenu toggleSidebar={toggleSidebar} />
  </div>
);

export default DashBoardMenu;
