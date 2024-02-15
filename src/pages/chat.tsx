import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';

function Chat() {
    return (
        <div
            className={`flex min-h-screen px-6 md:px-24 py-10  `}
        >

            {/* Sidebar */}
            <div className='w-64  p-2 shadow-lg rounded-xl'>
                {/* Sidebar content goes here */}
                <Sidebar />
            </div>

            {/* ChatBox */}
            <div className='flex-1 p-2 shadow-lg rounded-xl'>
                <ChatBox />
            </div>

        </div>
    );
}

export default Chat;