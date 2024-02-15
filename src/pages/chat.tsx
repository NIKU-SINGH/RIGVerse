import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';

function Chat() {
    return (
        <div className='flex'>

            {/* Sidebar */}
            <div className='w-64 bg-gray-200 p-2 shadow-lg'>
                {/* Sidebar content goes here */}
                <Sidebar />
            </div>

            {/* ChatBox */}
            <div className='flex-1 bg-gray-200 p-2'>
                <ChatBox />
            </div>

        </div>
    );
}

export default Chat;