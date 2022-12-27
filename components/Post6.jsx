import Image from 'next/image'
import React from 'react'
import Ph from '../public/photo-6.jpg'
import Ph1 from '../public/photo-7.jpg'
function Post6() {
  return (
    <>
        <div className='2xl:container mx-auto relative bg-white'>
            <div className='bg-[#d5b3ff] w-[60.58vw] h-[50vw] mx-auto'>
                <div className='bg-[url("../public/photo-6.jpg")] w-[32vw] h-[22vw] bg-center bg-no-repeat bg-cover absolute left-10 top-14 md:top-28 md:left-20 lg:top-40 lg:left-28 xl:top-44 xl:left-36 2xl:top-72 2xl:left-16'></div>
                <div className='bg-[url("../public/photo-7.jpg")] w-[38vw] h-[38vw] bg-no-repeat bg-cover absolute top-6 right-0 md:top-12 lg:top-16 xl:top-20 2xl:top-32'></div>
            </div>
        </div>
    </>
  )
}

export default Post6