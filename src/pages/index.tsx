import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/mainNavBar";
import Landing from "@/components/Landing";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import BackgroundGradient from "@/components/BackgroundGradient";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Hello Developers!", { body: "This is notification!" });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification permission granted!");
          sendNotification();
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   if ("Notification" in window) {
  //   }
  //   requestNotificationPermission();
  // }, [requestNotificationPermission]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-6 md:px-24 py-4 ${inter.className}`}
    >
      <Landing />
      <button onClick={sendNotification}>Trigger notification</button>
      {/* <Feature /> */}
      {/* <BackgroundGradient /> */}
      <CTA />
    </main>
  );
}
