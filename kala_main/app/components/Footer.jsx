import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen @bg-zinc-900 p-20'>
        <div className='w-1/2 font-["Founders Grotesk X-Condensed"] text-black tracking-tighter'>
            <h1 className='text-[8vw] leading-none tracking-tighter font-semibold -mb-5'>KALA-</h1>
            <h1 className='text-[8vw] leading-none tracking-tighter font-semibold -mb-5'>KAR</h1>
        </div>
        <div className='w-1/2 font-["Founders Grotesk X-Condensed"] text-black tracking-tighter '>
            <h1 className='text-[6vw] leading-none tracking-tighter uppercase font-semibold mb-8 relative'>presentations</h1>
            <div className="dets underline pt-10 font-[]">
                    <a className="block text-xl font-light" href="#">Facebook</a>
                    <a className="block text-xl font-light" href="#">Instagram</a>
                    <a className="block text-xl font-light" href="#">Twitters</a>
                    <a className="block text-xl font-light" href="#">Linkdin</a>
            </div>

            <div className="dets  underline text-xl gap-5 flex items-center pt-20 ">
              <p>E:</p>
                    <a className="block text-xl font-light" href="#">kala@gmail.com</a>
                   
            </div>

            <div className="dets absolute pt-20 font-[] right-20">
            <p className='block text-xl font-light pb-3'>Services :</p>
                    <a className="block underline text-xl font-light" href="#">KalaKart</a>
                    <a className="block underline text-xl font-light" href="#">KalaKareer</a>
                    <a className="block underline text-xl font-light" href="#">KalaLearn</a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer