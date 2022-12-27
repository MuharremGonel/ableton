import Image from 'next/image'
import {useState} from 'react'
import Phv from '../public/poster-juanpe.avif'
import Phvplay from '../public/indir.svg'

function Post3V() {
    const [show, setShow] = useState(false)

  return (
    <>
        <div className='2xl:container 2xl:mx-auto bg-white'>
            <div className={` relative ${show == true ? "hidden" : "block"} cursor-pointer`} onClick={()=>{setShow(!show)}}>
                <Image src={Phv} layout="responsive" className='px-5 md:px-28 lg:px-28 xl:px-96'/>
                <div className='absolute w-[40px] h-[40px] top-16 left-0 right-0 mx-auto md:w-[100px] md:h-[100px] md:top-40'>
                    <Image src={Phvplay} fill />
                </div>
                
                <p className='font-ableton text-xs pl-5 md:pl-28 lg:px-28 xl:pl-96 mt-1'>Why Ableton-Juanpe Bolivar</p>
            </div>
            {
                    show && 
                    <div className={` ${show == true ? "block" : "hidden"}`}>
                        <iframe 
                            className='w-full h-[400px] lg:h-[600px] px-5 md:px-28 lg:px-28 xl:px-96'
                            id="9sbnhgjeyxa"
                            src="//www.youtube-nocookie.com/embed/9SbnhgjeyXA?wmode=transparent&amp;controls=1&amp;vq=hd1080&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp;color=white&amp;modestbranding=1&amp;enablejsapi=1&amp;autoplay=1" 
                            wmode="transparent" 
                            frameborder="0" 
                            webkitallowfullscreen="" 
                            mozallowfullscreen="" 
                            allowfullscreen="" 
                            title="Why Ableton - Juanpe">
                        </iframe>
                        <p className='font-ableton text-sm pl-5 md:pl-28 lg:pl-28 xl:pl-96 mt-1'>Why Ableton-Juanpe Bolivar</p>
                    </div>  
            }
            <div className='2xl:container 2xl:mx-auto pt-14 md:pt-32 xl:pt-40 bg-white flex flex-col items-center  font-ableton '>
                <p className='2xl:mx-[400px] xl:mx-[380px] px-5 lg:px-0 lg:mx-28 lg:-mt-10 md:mx-24 lg:text-xl text-base font-semibold'>
                    We are more than 350 people from 30 different countries 
                    divided between our headquarters in Berlin and our offices 
                    in Los Angeles and Tokyo.
                </p>
                <p className='mt-10 2xl:mx-[400px] xl:mx-[380px] lg:mx-28 lg:px-0 lg:mt-10 md:mx-24 md:mt-2 px-5 lg:text-lg text-sm mb-20'>
                    Most of us are active musicians, producers, and DJs, 
                    and many of us use Live and Push every day. We come 
                    from a wide range of cultural and professional backgrounds. 
                    Some of us have PhDs, some are self-taught, and most of us 
                    are somewhere in between. What connects us is the shared 
                    belief that each of us has the skills and knowledge to 
                    contribute to something big: helping to shape the future 
                    of music culture.
                </p>
            </div>
        </div>
    </>
  )
}

export default Post3V