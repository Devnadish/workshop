import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col items-center  justify-center w-full max-w-6xl  m-auto">
        {/* <div className="relative grid  grid-rows-[auto_minmax(0,1fr)]  place-items-center w-full  max-w-6xl">
          <Navbar />
          <div className="overflow-auto w-full ">
            <main id="child" className="bg-zinc-800  min-h-[75vh] ">
              {children}
            </main>
          </div>
        </div> */}

        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />

          <main className="flex-grow bg-zinc-800 w-full ">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
