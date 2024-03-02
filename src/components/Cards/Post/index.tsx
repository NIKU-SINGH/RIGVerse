import React from 'react';
import Image from 'next/image';

const Post = () => {
    return (
        <div className="w-1/3 p-1">
            <a href="#">
                <div className="post bg-gray-100 text-white relative pb-full">
                    <Image
                        src='/games/cypherpunk.jpg'
                        alt="profile"
                        width={1000}
                        height={1000}
                        className="h-64 w-64 object-cover"

                    />
                    <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
                        <div className="flex justify-center items-center space-x-4 h-full">
                            <span className="p-2">
                                <i className="fas fa-heart"></i> 412K
                            </span>
                            <span className="p-2">
                                <i className="fas fa-comment"></i> 2,909
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default Post