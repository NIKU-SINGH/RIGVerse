import { MessageCircleMore, X } from 'lucide-react';
import React from 'react';
import ChatBox from '../ChatBox';
import { Sidebar } from '../Sidebar';

// Simple Modal Component
function Modal({ open, onClose }: { open: boolean, onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg">
                    <div className="absolute top-0 right-0 pt-4 pr-4">
                        <button onClick={onClose} className="text-white bg-red-400 rounded-full">
                            <X size={24} /> {/* Adjust the size as needed */}
                        </button>
                    </div>
                    {/* Modal content here */}
                    <div className='h-[80vh] overflow-scroll'>
                        <div className={`flex w-full mt-6`}>
                            <Sidebar />
                            <div className='hidden md:inline-block w-full'>
                                <ChatBox />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Index() {
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => setOpen(!open);

    return (
        <div className='fixed bottom-8 right-10 z-50'>
            <button
                className="flex items-center justify-center w-48 h-12 bg-orange-400 cursor-pointer hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
                onClick={toggleModal}
            >
                <MessageCircleMore className="mr-2" size={16} /> Chat
            </button>
            <Modal open={open} onClose={toggleModal} />
        </div>
    );
}

export default Index;
