import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
function Games() {
  return (
    <div className='flex'>
      <SideNavbar />
      <div className='flex flex-col'>
        <NavbarDemo />
        <div className={`flex px-2 w-full`}>

        </div>
      </div>

    </div>



  );
}

export default Games;