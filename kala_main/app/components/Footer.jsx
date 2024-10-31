import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen @bg-zinc-900 p-20'>
        <div className='w-1/2 font-["Founders Grotesk X-Condensed"] text-black tracking-tighter'>
            <h1 className='text-[8vw] leading-none tracking-tighter font-semibold -mb-5'>KALA-</h1>
            <h1 className='text-[8vw] leading-none tracking-tighter font-semibold -mb-5'>KAR</h1>
        </div>
        <div className='w-1/2 font-["Founders Grotesk X-Condensed"] text-black tracking-tighter'>
            <h1 className='text-[6vw] leading-none tracking-tighter uppercase font-semibold -mb-8'>presentations</h1>
            <div className="dets">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitters</a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer