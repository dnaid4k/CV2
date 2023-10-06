import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Portfolio Website</h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.  
        </p>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/profilo.jpg"
            alt='hero image'
            width={200}
            height={300}
            />
        </div>
      </div>
    </section>
  )
}

export default Hero