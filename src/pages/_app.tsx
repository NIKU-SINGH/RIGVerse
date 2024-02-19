import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarDemo from "@/components/Navbar/mainNavBar";
import GlobalNavbar from "@/components/Navbar/globalNavbar";
import LeftCollapsible from "@/components/Collapsible/Left";
import RightCollapsible from "@/components/Collapsible/Right";
import { useRouter } from 'next/router'; // Import useRouter
import { SideNavbar } from "@/components/SideNavbar";
import GlobalChat from "@/components/GlobalChat";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRootRoute = router.pathname === '/';
  const isChatRoute = router.pathname !== '/chat'; // Check if it's not the /chat route

  return (
    <>
      {isRootRoute && <NavbarDemo />}
      {isChatRoute && <GlobalChat />} {/* Only render GlobalChat if it's not the /chat route */}
      <Component {...pageProps} />
    </>
  );
}
