"use client"
import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes flex justify-center items-center w-full h-screen overflow-hidden relative'>
            {/* Background video */}
            <video
                src="/video.mp4" 
                autoPlay
                muted
                loop   // Ensures the video plays in a loop
                className='absolute top-0 left-0 w-full h-full object-cover z-[0]' // Video behind everything
            />

            {/* Foreground content */}
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className="relative rounded-2xl z-[100] w-[70vw] h-[70vh] bg-cover bg-center bg-[url('/bg.png')]">
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    {/* Left Eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-[#B28C37]'>
                            <div 
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-[#B28C37]'>
                            <div 
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
