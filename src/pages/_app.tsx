import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarDemo from "@/components/Navbar/temp"; // Import the Navbar component

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarDemo />
      <Component {...pageProps} />
    </>
  );
}
