import React from 'react'

const Features = () => {
  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-20'>
        <h1 className='text-zinc-800 text-8xl font-["Neue Montreal tracking-tight"]'>Features</h1>
      </div>
      
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div className='cardcontainer relative w-1/2 h-[95vh]'>
            <h1 className='absolute text-black z-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"KalaKart".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
              <img className="bg-cover" src='/kart.jpg' width={650} alt="KalaKart" />
            </div>
          </div>
          
          <div className='cardcontainer relative rounded-xl w-1/2 h-[95vh]'>
            <h1 className='absolute text-black z-10 right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"KalaKart".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-600'>
              <img className='h-full bg-cover' src='learn.jpg' width={650} alt="Learn" />
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-10 mt-10">
          <div className='cardcontainer relative w-1/2 h-[95vh]'>
            <h1 className='absolute text-black z-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"KalaKart".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
              <img className="bg-cover" src='/kareer.jpg' width={650} alt="Kareer" />
            </div>
          </div>
          
          <div className='cardcontainer relative rounded-xl w-1/2 h-[95vh]'>
            <h1 className='absolute text-black z-10 right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter text-8xl'>
              {"KalaKart".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-600'>
              <img className='h-full bg-cover' src='culture.jpg' width={650} alt="Culture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
