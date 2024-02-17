import React from 'react'
import Image from 'next/image'
function Index() {
    return (
        <div>
            <div className="relative w-full h-64 cursor-pointer">
                <Image
                    src="/games/cypherpunk.jpg"
                    alt="feature"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />

                <div className='flex flex-col bottom-0 absolute px-4 py-2 w-full rounded-lg' style={{
                    background: 'rgba( 255, 255, 255, 0.25 )',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    borderRadius: '10px',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )'
                }}>
                    <h1 className="text-white text-md font-extrabold tracking-tight">
                        Join the <br />RigLabs Gaming
                    </h1>
                    <p className="text-gray-200">
                        Discover the best games
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Index