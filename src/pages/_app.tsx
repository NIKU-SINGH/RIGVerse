import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarDemo from "@/components/Navbar/mainNavBar"; // Import the Navbar component
import GlobalNavbar from "@/components/Navbar/globalNavbar"; // Import the Navbar component
import LeftCollapsible from "@/components/Collapsible/Left";
import RightCollapsible from "@/components/Collapsible/Right";
import { useRouter } from 'next/router'; // Import useRouter
import { SideNavbar } from "@/components/SideNavbar";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRootRoute = router.pathname === '/';
  return (
    <>

      {isRootRoute && (
        <>
          {/* <LeftCollapsible /> */}
          {/* <RightCollapsible /> */}
          <NavbarDemo />
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}
