import React from 'react'
import Image from 'next/image'
import Ph from '../public/poster-meet-the-makers.avif'
function Post5() {
  return (
    <>
        <div className='2xl:container 2xl:mx-auto bg-white'>
            <div className='xl:px-28 md:px-10 px-5 2xl:mx-auto 2xl:px-20'>
                <Image src={Ph} layout="responsive" />
            </div>
            <div className='2xl:container 2xl:mx-auto pt-14 xl:pt-40 bg-white flex flex-col items-center  font-ableton '>
                <div className='container mx-auto'>
                    <p className='2xl:mx-[400px] xl:mx-[320px] px-5 lg:px-0 lg:mx-28 lg:-mt-10 md:mx-24 lg:text-xl text-base font-semibold'>
                        We’re passionate about what we do, but we’re equally 
                        passionate about improving who we are.
                    </p>
                    <p className='mt-10 2xl:mx-[400px] xl:mx-[320px] lg:mx-28 lg:px-0 lg:mt-10 md:mx-24 md:mt-2 px-5 lg:text-lg text-sm'>
                        We work hard to foster an environment where people 
                        can grow both personally and professionally, and we 
                        strive to create a wealth of opportunities to learn 
                        from and with each other.
                    </p>
                    <p className='mt-10 2xl:mx-[400px] xl:mx-[320px] lg:mx-28 lg:px-0 lg:mt-10 md:mx-24 md:mt-2 px-5 lg:text-lg text-sm mb-20'>
                        Alongside an internal training program, employees are 
                        actively supported in acquiring new knowledge and skills, 
                        and coached on applying these in their daily work. 
                        In addition, staff-organized development and music 
                        salons are a chance to discuss new technologies, production 
                        techniques and best practices.
                    </p>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Post5