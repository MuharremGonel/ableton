import React from 'react'
import Ph from '../public/photo-8.jpg'
import Image from 'next/image'

function Post7() {
  return (
    <>
        <div className='2xl:container 2xl:mx-auto bg-white pb-10 2xl:pb-20'>
            <div className='flex flex-col xl:flex-row items-center font-ableton xl:mx-20'>
                <div className='bg-[url("../public/photo-8.jpg")] background  w-[70vw] h-[65vw] xl:h-[38.33vw] 2xl:h-[25vw]'>
                </div>
                <div className='bg-[#b1c5ff] w-[70vw] xl:h-[38.33vw] 2xl:h-[25vw] xl:text-xl xl:font-semibold'>
                    <div className='flex flex-col p-[8.33vw] xl:mt-24 2xl:mt-5'>
                        <p className=''>
                            We’re really proud of the work we’ve done so far. 
                            But there’s so much more to come. If you’d like to 
                            be a part of it, please join us.
                        </p>
                        <p className="text-[#0000ff] mt-5 tracking-wide leading-relaxed after:content-['\00a0›'] cursor-pointer">See latest jobs </p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post7