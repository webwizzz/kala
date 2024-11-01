"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-20'>
        <h1 className='text-zinc-800 text-8xl font-bold font-["Neue Montreal tracking-tight"]'>Features</h1>
      </div>
      
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div 
            onMouseEnter={() => handleMouseEnter(0)} 
            onMouseLeave={handleMouseLeave} 
            className='cardcontainer relative w-1/2 h-[95vh]'
          >
            <h1 className='absolute flex overflow-hidden text-black z-10 font-bold left-full -translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"KalaKart".split('').map((item, index) => (
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={hoveredCard === 0 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [2.22, 2, 1.36, 8], delay: index * 0.04 }}
                  className='inline-block' 
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div 
              animate={hoveredCard === 0 ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'
            >
              <img className="bg-cover" src='/kart.jpg' width={650} alt="KalaKart" />
            </motion.div>
          </div>
          
          <div 
            onMouseEnter={() => handleMouseEnter(1)} 
            onMouseLeave={handleMouseLeave} 
            className='cardcontainer relative w-1/2 h-[95vh]'
          >
            <h1 className='absolute flex overflow-hidden text-black z-10 right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none font-bold tracking-tighter text-8xl'>
              {"Learn".split('').map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [2.22, 2, 1.36, 8], delay: index * 0.04 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div 
              animate={hoveredCard === 1 ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='card w-full h-full rounded-xl bg-green-600'
            >
              <img className='h-full bg-cover' src='learn.jpg' width={650} alt="Learn" />
            </motion.div>
          </div>
        </div>

        <div className="cards w-full flex gap-10 mt-10">
          <div 
            onMouseEnter={() => handleMouseEnter(2)} 
            onMouseLeave={handleMouseLeave} 
            className='cardcontainer relative w-1/2 h-[95vh]'
          >
            <h1 className='absolute flex overflow-hidden text-black z-10 left-full font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"Kareer".split('').map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 2 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [2.22, 2, 1.36, 8], delay: index * 0.04 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div 
              animate={hoveredCard === 2 ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'
            >
              <img className="bg-cover" src='/kareer.jpg' width={650} alt="Kareer" />
            </motion.div>
          </div>
          
          <div 
            onMouseEnter={() => handleMouseEnter(3)} 
            onMouseLeave={handleMouseLeave} 
            className='cardcontainer relative w-1/2 h-[95vh]'
          >
            <h1 className='absolute flex overflow-hidden font-bold text-black z-10 right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"Culture".split('').map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 3 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [2.22, 2, 1.36, 8], delay: index * 0.04 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div 
              animate={hoveredCard === 3 ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='card w-full h-full rounded-xl bg-green-600'
            >
              <img className='h-full bg-cover' src='culture.jpg' width={650} alt="Culture" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
