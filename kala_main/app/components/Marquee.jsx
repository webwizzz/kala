"use client";  // Add this line at the top
import { motion } from 'framer-motion';


const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004d43]">
            <div className='text t border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden '>
                <motion.h1 
                    initial={{x: 0}} 
                    animate={{x: "-100%"}} 
                    transition={{ease: "linear", repeat: Infinity, duration: 20}} 
                    className='text-[18vw] font-oswald leading-none  tracking-tighter uppercase pt-4 mb-4 font-semibold'>
                    .shop .learn .teach .help 
                </motion.h1>
                <motion.h1 
                    initial={{x: 0}} 
                    animate={{x: "-100%"}} 
                    transition={{ease: "linear", repeat: Infinity, duration: 20}} 
                    className='text-[18vw] font-oswald leading-none tracking-tighter uppercase pt-4 mb-4 font-semibold'>
                    .shop .learn .teach .help
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee;
