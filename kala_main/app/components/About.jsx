import React from 'react'

const About = () => {
  return (
    <div>
        <div className='w-full p-20 bg-[#ac874e] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] text-zinc-900 tracking-tighter ">
                Ochi is a strategic partner for fast-growing tech businesses that need 
                to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className="w-full flex gap-10 border-t-[1px] pt-10 mt-20 border-[#604a2a]">
              <div className='w-1/2'>
                  <h1 className='text-7xl'>Our Approach</h1>
                  <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>READ MORE
                  <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                  </button>
              </div>
              <div className="w-1/2 h-[70vh] rounded-3xl">
              <img className='rounded-2xl'
                src="/12.jpg"
                width={450}
                height={500}
                alt="Picture"/>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default About