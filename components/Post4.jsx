import React from 'react'
import Ph3 from '../public/photo-3.jpg'
import Ph4 from '../public/photo-4.jpg'
import Ph5 from '../public/photo-5.jpg'
import Image from 'next/image'
function Post4() {
  return (
    <>
       <div className='relative 2xl:container 2xl:mx-auto h-[76vw] bg-white'>
          <div className='absolute w-[58.33vw] h-[75vw] bg-[#B6FFC0] top-0 left-0 z-0'>
            <div className="bg-[url('../public/photo-3.jpg')] bg-no-repeat ml-10 mt-10 md:mt-20 md:ml-24 min-[820px]:mt-20 min-[820px]:ml-24 lg:mt-32 lg:ml-32 xl:ml-44 2xl:mt-56 2xl:ml-24  bg-cover w-[33vw] h-[25vw]"></div>
            <div className="bg-[url('../public/photo-4.jpg')] bg-no-repeat ml-10 mt-5 md:mt-10 md:ml-24 min-[820px]:mt-10 min-[820px]:ml-24 lg:mt-16 lg:ml-32 xl:ml-44 2xl:mt-24 2xl:ml-24 bg-cover w-[33vw] h-[25vw]"></div>
          </div> 
          <div className="bg-[url('../public/photo-5.jpg')] absolute right-14 top-16 min-[375px]:right-16 md:top-36 md:right-32 min-[820px]:top-32 min-[820px]:right-32 lg:right-36 lg:top-52 xl:right-44 xl:top-64 2xl:right-10 2xl:top-96 2xl:w-[666px] 2xl:h-[666px] bg-no-repeat bg-cover w-[33vw] h-[41vw]"></div>   
        </div>
    </>
  )
}

export default Post4