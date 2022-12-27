import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Ableton from '../public/ableton.svg'
import { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";

const menuItems = [
  {
      title: "Live",
      id: "/live"
  },
  {
      title: "Push",
      id: "/Push"
  },
  {
      title: "Note",
      id: "/note"
  },
  {
      title: "Link",
      id: "/link"
  },
  {
      title: "Shop",
      id: "/shop"
  },
  {
      title: "Packs",
      id: "/packs"
  },
  {
      title: "Help",
      id: "/help"
  }
 ];
function Navbar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Head>
        <title>Abselon</title>
      </Head>
      <div className='2xl:container  2xl:mx-auto mx-0 h-16 items-center flex justify-between text-base  font-ableton bg-white mb-0.5'>
        <div className='lg:flex lg:visible invisible hidden items-center ml-5'>
          <div className='mt-2 ml-5 lg:text-xl text-white'>
            <Link href="/">
              <Image src={Ableton} alt="logo" width={60} height={28}/>
            </Link>
          </div>
          <div className='flex items-center lg:ml-0 ml-5'>
            {menuItems.map((menu, index)=>{
              return(
                <Link 
                className={`px-2.5 mx-[5px] leading-[30px] mt-2 font-bold lg:text-base 2xl:text-xl text-xl ${router.pathname == `${menu.id}` ? "text-[#ff764d]" : ""}`} 
                key={index} 
                href={menu.id}>
                  {menu.title}
                </Link>
              )
            })}
            <button onClick={()=>{setShow(!show)}} ref={ref} className='flex ml-5 lg:text-base 2xl:text-xl font-semibold mt-2 pr-5 text-[#ff764d]'>
              More&nbsp;
              <span  >
                <AiOutlinePlus className={ ` ${show == false ? "inline": "hidden"}`}  />
              </span>
              <span  >
                <AiOutlineMinus className={`${show == true ? "inline": "hidden"}`} />
              </span>
            </button>
            
          </div>
          <div className='lg:ml-[140px] 2xl:ml-[560px] lg:mt-2 ml-0 xl:ml-[380px] lg:text-base xl:text-lg  md:ml-60 flex items-center'>
              <Link href="tryliveforfree" className='font-bold text-[#0000ff]'>
                Try Live for free
              </Link>
              <Link href="tryliveforfree" className='ml-5 lg:text-sm text-base font-bold'>
                Log in or register
              </Link>
          </div>
          </div>
          {
            <div className='min-[240px]:flex lg:hidden items-center z-[100]'>
              <div className='mt-2 ml-5 '>
                <Link href="/">
                  <svg 
                  role="img"
                  aria-labelledby="logo"
                  className={nav ? "fill-white" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="21"
                  viewBox="0 0 45 21">
                    <title id="logo">Ableton Homepage</title>
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 
                             0h3v21h-3zM18 0h3v21h-3zM24 
                             18h21v3H24zM24 12h21v3H24zM24 
                             6h21v3H24zM24 0h21v3H24z">
                    </path>
                  </svg>
                </Link>
              </div>
              <button className={nav ? "text-white ml-7 mt-3 text-xl flex items-center" : `ml-7 text-xl mt-3 flex items-center`} onClick={()=>{setNav(!nav)}}>
                Menu 
                <span  >
                  <IoMdArrowDropdown className={ ` ${nav == false ? "inline": "hidden"}`}  />
                </span>
                <span  >
                  <IoMdArrowDropup className={`${nav == true ? "inline": "hidden"}`} />
                </span>
              </button>
            </div>
          }
          <div className={ nav ? `text-white absolute w-full z-50 top-0 pt-14 right-0 left-0 block ease-in duration-300 bg-[#0000FF]` : `absolute w-full right-0 left-0 p-10 -top-[180%]  hiddem ease-in duration-300`} >
            <div className='flex flex-col'>
              {menuItems.map((menu, index)=>{
                return(
                  <Link 
                  className={`ml-5 font-bold text-xl leading-8  mt-2 ${router.pathname == `${menu.id}` ? "text-[#ff764d]" : ""}`} 
                  key={index} 
                  href={menu.id}>
                    {menu.title}
                  </Link>
                )
              })}
              <div className='flex flex-col ml-5 text-xl mt-2'>
                <Link href="tryliveforfree" className=''>
                  Try Live for free
                </Link>
                <Link href="tryliveforfree" className='mt-2 text-sm'>
                  Log in or register
                </Link>
              </div>
            </div>
            <div className='flex flex-col ml-5'>
              <h2 className='pt-3 text-xl font-bold'>More On Ableton.com:</h2>
              <div className='flex flex-col mt-4 text-sm list-none'>
                <li className='mb-3.5'>
                  <Link href="/">
                    Blog
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/">
                    Ableton for the Classroom
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/">
                    Ableton for Colleges and Universities
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/">
                    Certified Training
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/">
                    About Ableton
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/about">
                    Jobs
                  </Link>
                </li>
                <li className='mb-3.5'>
                  <Link href="/">
                    Apperenticeships
                  </Link>
                </li>
              </div>
              <div className='mb-2'>
                <h2 className='pt-3 text-xl mb-2 font-bold'>More From Ableton:</h2>
                <div className='flex text-sm overflow-scroll '>
                    <div className='mr-2.5 min-w-[240px]'>
                      <p className='font-bold'>Loop</p>
                      <p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                    </div>
                    <div className='mx-2.5 min-w-[240px]'>
                      <p className='font-bold'>Learning Music</p>
                      <p>Learn the fundamentals of music making right in your browser.</p>
                    </div>
                    <div className='mx-2.5 min-w-[240px]'>
                      <p className='font-bold'>Learning Synths</p>
                      <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                    </div>
                    <div className='mx-2.5 min-w-[240px]'>
                      <p className='font-bold'>Making Music</p>
                      <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {
      show && 
      <div className='-mt-0.5 mb-0.5 pb-10 2xl:container 2xl:mx-auto bg-white font-ableton'>
        <div className='ml-10'>
          <h2 className='pt-8 xl:text-3xl lg:text-2xl leading-[42px] font-bold'>More On Ableton.com:</h2>
          <div className='flex mt-4 xl:text-lg lg:text-base list-none'>
            <li>
              <Link href="/" className='mr-2.5 lg:mr-0 pr-2.5'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className='mx-2.5 lg:mx-0 px-2.5'>
                Ableton for the Classroom
              </Link>
            </li>
            <li>
              <Link href="/" className='mx-2.5 lg:mx-0 px-2.5'>
                Ableton for Colleges and Universities
              </Link>
            </li>
            <li>
              <Link href="/" className='mx-2.5 lg:mx-0 px-2.5'>
                Certified Training
              </Link>
            </li>
            <li>
              <Link href="/" className='mx-2.5 lg:mx-0 px-2.5 text-[#ff764d]'>
                About Ableton
              </Link>
            </li>
            <li>
              <Link href="/about"  className='mx-2.5 lg:mx-0 px-2.5'>
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className='mx-2.5 lg:mx-0 px-2.5'>
                Apperenticeships
              </Link>
            </li>
          </div>
        </div>
        <div className='ml-10'>
          <h2 className='pt-8 xl:text-3xl lg:text-2xl font-bold'>More From Ableton:</h2>
          <div className='flex justify-between mt-4 lg:text-base text-lg list-none'>
            <li>
              <Link  href="/">
                <p className='xl:text-xl lg:text-lg font-bold'>Loop</p>
                <p className='pr-5 lg:text-base xl:text-xl'>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className='xl:text-xl lg:text-lg font-bold'>Learning Music</p>
                <p className='pr-5 lg:text-base xl:text-xl'>Learn the fundamentals of music making right in your browser.</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className='xl:text-xl lg:text-lg font-bold'>Learning Synths</p>
                <p className='pr-5 lg:text-base xl:text-xl'>Get started with synthesis using a web-based synth and accompanying lessons.</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className='xl:text-xl lg:text-lg font-bold'>Making Music</p>
                <p className='pr-5 lg:text-base xl:text-xl'>Some tips from 74 Creative Strategies for Electronic Producers.</p>
              </Link>
            </li>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Navbar
