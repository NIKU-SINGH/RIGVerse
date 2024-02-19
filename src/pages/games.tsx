import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
function Games() {
  return (
    <div className='flex w-full overflow-hidden'>
      <SideNavbar />

      <div className='flex w-full flex-col'>
        {/* Actual Game area */}


      </div>

    </div>

  )
}

export default Games;