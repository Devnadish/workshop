// import "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ["latin"] });


// import {Amiri}
import {  Tajawal,Amiri } from "next/font/google";
const amiri = Amiri({
  weight: '400',
  subsets: ['arabic', 'latin'],
  variable:"--font-amiri",
})
const tajawal = Tajawal({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
});







export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`flex flex-col items-center justify-center w-full max-w-7xl m-auto bg-gray-500 ${amiri.variable} ${tajawal.variable}`}
      >
        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />
          {/* <main className="container flex-grow bg-zinc-600 w-full text-white "> */}
          <main className="flex  flex-grow bg-slate-800   w-full text-white ">
            {children}
            <Toaster
              position="bottom-center "
              toastOptions={{
                className: "",
                style: {
                  border: "1px solid green",
                  borderRight: "15px solid green",
                  padding: "2rem",
                  color: "#713200",
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
              }}
            />
            <Analytics />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
