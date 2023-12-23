import DashBoardMenu from "@/components/pagecomponent/back/dashboard/MenuSide";
// import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
// import { LuLayoutDashboard } from "react-icons/lu";

export default function Dashboard({ children }) {
  return (
    <main className=" relative flex  flex-grow bg-slate-800   w-full text-white ">
        <DashBoardMenu />
      <div className="absolute left-3 top-2   z-40 flex  justify-center items-center   bg-yellow-300 text-sky-950 rounded-md h-10 w-10">
        <Link href={"/dashboard"}>
          <AiOutlineDashboard size={30}/>
        </Link>
      </div>
      {children}
    </main>
  );
}
