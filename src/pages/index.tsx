import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar/temp"
import Landing from "@/components/Landing";
import CTA from "@/components/CTA";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-6 md:px-24 py-10 ${inter.className}`}
    >
      <Landing />
      {/* Explore sectiom */}
      <CTA />
    </main>
  );
}
