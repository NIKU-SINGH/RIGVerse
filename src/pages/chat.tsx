import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
function Chat() {
        return (
                <div className='flex'>
                        <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col'>
                                {/* <NavbarDemo /> */}
                                <div className={`flex px-4 w-full mt-6`}>
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