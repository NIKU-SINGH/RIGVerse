import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';

function Chat() {
    return (
        <div
            className={`flex   md:px-24 py-10  `}
        >
            <Sidebar />
            <ChatBox />

        </div>
    );
}

export default Chat;