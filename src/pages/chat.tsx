import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
function Chat() {
    return (
        <div className='flex'>
            <SideNavbar />
            <div className='flex flex-col w-full'>
                <NavbarDemo />
                <div className={`flex px-4 w-full`}>
                    <Sidebar />
                    <div className='hidden md:inline-block w-full'>

                        <ChatBox />
                    </div>

                </div>
            </div>

        </div>



    );
}

export default Chat;