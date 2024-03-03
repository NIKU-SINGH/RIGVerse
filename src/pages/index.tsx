import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar/mainNavBar"
import Landing from "@/components/Landing";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import BackgroundGradient from "@/components/BackgroundGradient";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
        return (
                <main
                        className={`flex min-h-screen flex-col items-center justify-between px-6 md:px-24 py-4 ${inter.className}`}
                >
                        <Landing />
                        {/* <Feature /> */}
                        {/* <BackgroundGradient /> */}
                        <CTA />
                </main>
        );
}
