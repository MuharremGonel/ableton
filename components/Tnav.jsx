import {useState, useEffect, useCallback} from 'react'
import Link from 'next/link'
function Tnav() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollY , setScrollY] = useState(0)


    function logit(){
        setScrollY(window.pageYOffset)
    }

    useEffect(()=>{
        function watchScroll(){
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () =>{
            window.removeEventListener("scroll", logit);
        }
    })

    const controlNavbar = () =>{
        if(typeof window !== 'undefined'){
            if(window.screenY == 0){
                setShow("0")
            }
            if(window.scrollY > lastScrollY){
                setShow(false);
                console.log(window.scrollY)
            }else{
                setShow(true);
            }

        setLastScrollY(window.scrollY)
        }
    }
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', controlNavbar)
        
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    })
        
    
  return (
    <>
        <div className='2xl:container 2xl:mx-auto mx-0 bg-white font-ableton font-semibold'>
            <div className={` ${show == true ? "fixed top-0 container bg-white/[0.9] z-30 duration-1000" : ""}  ${scrollY == 0 ? "sticky" : ""}`}>
                <div className='flex lg:pl-10 lg:text-sm xl:text-lg md:text-sm text-xs ml-0 pl-5 list-none h-16 items-center duration-1000 w-full'>
                    <li>
                        <Link className='pr-2.5 mr-[5px] text-[#ff764d]' href="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='px-2.5 mx-[5px]' href="/">
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link className='pl-2.5 ml-[5px]' href="/">
                            Apprenticeships
                        </Link>
                    </li>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Tnav