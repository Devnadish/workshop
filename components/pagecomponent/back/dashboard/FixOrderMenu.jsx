"use client";
import {useState} from "react";
import Link from 'next/link';
import { Car, FileCheck, FileEdit, FilePlus, PlusCircle } from 'lucide-react';

import { FaCarCrash } from "react-icons/fa";

import ExpandMenu from "./ExpandMenu";


const FixOrderMenu = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3    rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={" كرت صيانة"}
        menuIcon={<FaCarCrash size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white">
          <div className="w-full flex flex-col items-center gap-2 p-2">
            <Link
              href={"/dashboard/fixing/neworder"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>جديد</p>
              <FilePlus size={30} />
            </Link>

            <Link
              href={"/dashboard/fixing/updateorder"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>تعديل</p>
              <FileEdit size={30} />
            </Link>
            <Link
              href={"/dashboard/fixing/addservice"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>اضافة</p>
              <PlusCircle size={30} />
            </Link>
          </div>
          <Link
            href={"/dashboard/fixing/closeorder"}
            className={menuStyle}
            onClick={() => toggleSidebar()}
            prefetch={true}
          >
            <p>اقفال</p>
            <FileCheck size={30} />
          </Link>
        </div>
      </ExpandMenu>
    </>
  );
};

export default FixOrderMenu;
