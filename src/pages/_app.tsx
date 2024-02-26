import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarDemo from "@/components/Navbar/mainNavBar";
import GlobalNavbar from "@/components/Navbar/globalNavbar";
import LeftCollapsible from "@/components/Collapsible/Left";
import RightCollapsible from "@/components/Collapsible/Right";
import { useRouter } from 'next/router'; // Import useRouter
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import GlobalChat from "@/components/GlobalChat";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRootRoute = router.pathname === '/';
  const isChatRoute = router.pathname !== '/chat';
  const isRegisterRoute = router.pathname !== '/register';
  const isStudioRegisterRoute = router.pathname !== '/studio-register';

  return (
    <>
      {isRootRoute && <NavbarDemo />}
      {isChatRoute && !isRootRoute && isRegisterRoute && isStudioRegisterRoute && <GlobalChat />} {/* Only render GlobalChat if it's not the /chat route */}
      <Component {...pageProps} />
    </>
  );
}
