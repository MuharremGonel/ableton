import React from 'react'
import Image from 'next/image'
import Ph1 from '../public/photo-1.jpg'
import Ph2 from '../public/photo-2.jpg'
function Post2() {
  return (
    <>
      <div className='2xl:container mx-0  2xl:mx-auto bg-white'>
        <div className='grid grid-cols-2'>
          <div className='z-20 '>
            <Image className='py-12 ml-8 md:ml-12 md:py-28' layout='responsive' src={Ph1}/>
          </div>
          <div className=' bg-[#FBFFA7] items-center md:-ml-7'>
            <Image className=' mt-24 pr-7 pl-12 md:py-28 md:pl-32 md:mt-32' layout='responsive' src={Ph2}/>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Post2