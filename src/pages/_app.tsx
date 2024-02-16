import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarDemo from "@/components/Navbar/temp"; // Import the Navbar component
import LeftCollapsible from "@/components/Collapsible/Left";
import RightCollapsible from "@/components/Collapsible/Right";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LeftCollapsible />
      <RightCollapsible />
      <NavbarDemo />

      <Component {...pageProps} />
    </>
  );
}
