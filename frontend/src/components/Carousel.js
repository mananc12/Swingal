import React from 'react'

const Carousel = () => {
  return (
    <div className=' h-40 md:h-80 p-4 relative flex flex-col items-center justify-start bg-yellow-300'>
        <img className='w-full h-full' src="/images/29854.jpg" alt='image'/>
        <div className='absolute flex flex-col items-center justify-center md:top-10'>
        <span className=' max text-3xl md:text-7xl font-bold'>Best Discounts</span>
        <span className=' text-2xl md:text-5xl font-bold'>Upto 70% off</span>
        </div>
    </div>
  )
}

export default Carousel