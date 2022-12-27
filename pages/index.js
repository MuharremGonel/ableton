import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Post2 from '../components/Post2'
import Post2P from '../components/Post2P'
import Post3V from '../components/Post3V'
import Post4 from '../components/Post4'
import Post4P from '../components/Post4P'
import Post5 from '../components/Post5'
import Post6 from '../components/Post6'
import Post6P from '../components/Post6P'
import Post7 from '../components/Post7'
import Tnav from '../components/Tnav'
export default function Home() {
  return (
    <>
      <div className='bg-[#eee]'>
        <Navbar /> 
        <Tnav />
        <Post />
        <Post2 />
        <Post2P />
        <Post3V />
        <Post4 />
        <Post4P />
        <Post5 />
        <Post6 />
        <Post6P />
        <Post7 />
        <Footer />
      </div>
    </>
  )
}
