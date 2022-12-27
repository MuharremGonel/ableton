import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
function Custom404() {
  return (
    <>
        <div className='bg-[#eee]'>
            <Navbar/>
            <div className='2xl:container 2xl:mx-auto bg-white font-ableton font-bold -mt-1 2xl:mt-0'>
                <h1 className='lg:px-32 lg:pt-32 2xl:text-6xl px-10 pt-12 text-3xl lg:text-4xl'>The page you're looking for does not exist.</h1>
                <p className='lg:px-32 lg:pb-32 lg:mt-10 2xl:text-3xl text-xl lg:text-2xl mt-5 px-10 pb-20'>You could go back to the<Link href='/' className='text-[#0000ff]'>home page.</Link></p>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Custom404