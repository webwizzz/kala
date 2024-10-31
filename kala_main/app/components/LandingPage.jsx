import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1' style={{ backgroundColor: '#f5e9da' }}>
       <div className='textstructure mt-52 px-20'>
            <div className='line1'>
            <img
                src="/1.png"
                width={750}
                height={900}
                alt="Picture"/>
            </div>
            <div className='line2 flex mt-4'>
            <motion.div
                initial={{ width: "0" }}
                animate={{ width: "16vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
                className='w-[17vw] h-[8vw] mr-[1vw] rounded-xl bg-[url("/charkha.jpg")] bg-cover bg-center' >
            </motion.div>

                <img
                    src="/2.png"
                    width={300}
                    height={400}
                    alt="Picture"/>
                <div className='space w-[5vw]'></div>
                <img
                    src="/3.png"
                    width={100}
                    height={200}
                    alt="Picture"/>
            </div>
            <div className='line3 flex gap-10 mt-4'>
                <img
                    src="/9.png"
                    width={500}
                    height={500}
                    alt="Picture"/>
                <img
                    src="/5.png"
                    width={300}
                    height={400}
                    alt="Picture"/>    
            </div>
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between text-zinc-900 items-center py-5 px-20">
            {["Empowering Local Artisans", "Learn New Kala"].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none" key={index}>{item}</p>
            ))}
            <div className="ShopNow flex items-center gap-3">
                <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">Shop Now</div>
                <div className="w-10 h-10 flex items-center font-light justify-center border-[1px] border-zinc-400 rounded-full">
                    <span className="rotate-[45deg]">
                        <FaLongArrowAltUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LandingPage
