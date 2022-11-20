import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Ableton from '../public/ableton.svg'
import { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

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
  const ref = useRef(null);
  return (
    <>
      <Head>
        <title>Abselon</title>
      </Head>
      <div className='container mx-auto h-20 items-center flex justify-between text-xl font-ableton bg-white'>
        <div className='flex'>
          <div className='mt-1 ml-5'>
            <Link href="/">
              <Image src={Ableton} alt="logo" width={45} height={21}/>
            </Link>
          </div>
          <div className='flex'>
            {menuItems.map((menu, index)=>{
              return(
                <Link 
                className={`ml-10 ${router.pathname == `${menu.id}` ? "text-[#ff764d]" : ""}`} 
                key={index} 
                href={menu.id}>
                  {menu.title}
                </Link>
              )
            })}
            <button onClick={()=>{setShow(!show)}} ref={ref} className='ml-5 pr-5 text-[#ff764d]'>
              More&nbsp;
              <span  >
                <AiOutlinePlus className={ ` ${show == false ? "inline": "hidden"}`}  />
              </span>
              <span  >
                <AiOutlineMinus className={`${show == true ? "inline": "hidden"}`} />
              </span>
            </button>
            
          </div>
        </div>

        <div className='flex mr-5'>
          <div>
              <Link href="tryliveforfree" className='text-[#0000ff]'>
                Try Live for free
              </Link>
              <Link href="tryliveforfree" className='ml-5 text-base'>
                Log in or register
              </Link>
          </div>
        </div>
      </div>
      {show && <div className=''>Muharrem Gonel</div>}
    </>
  )
}

export default Navbar
