import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar  = () => {
    const[nav, setNav] = useState(false);
  return (
    <>
    <nav className=' h-auto bg-black z-[999] p-4 fixed w-full text-white'>
        <div className='flex justify-between w-full items-center pb-4'>
        <span className='text-white font-light cursor-pointer flex-1' onClick={() => setNav(!nav)}><AiOutlineMenu size={25}/></span>
        <h1 className='text-center text-[#fc444a] font-light sm:text-[23px] text-[19px] xxl:text-[40px] flex-1'><span className='text-white'>News</span> Forum</h1>
        <div className='text-white sm:text-md text-sm flex-1 text-end'> <span className='border border-white p-1 text-sm'>Subscribe</span></div>
        </div>
        <hr className='w-[100%] mx-auto' />
        <div className='w-full pt-5 font-thin px-8 flex justify-center gap-7 sm:text-[20px] sm:gap-9 text-sm items-center'>
        <Link to='/'><p>Home</p> </Link>
        <Link to='/news'><p>News</p></Link>
        <Link to='/tech'><p>Technology</p></Link>
        <Link to='/news'><p>Business</p></Link>
        <Link to='/news'><p>Sports</p></Link>
        <Link to='/news'><p>About</p></Link>
       
        </div>
    </nav>
    <div className={`fixed sm:w-[30%] w-[60%] h-full bg-white z-[1000] flex items-center justify-start px-3 py-8 ${nav ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
    <p className='absolute right-5 top-5 cursor-pointer' onClick={() => setNav(!nav)}><AiOutlineClose size={30}/></p>
        <ul className='flex flex-col gap-5 relative'>
           <Link to="/"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>Home</p></Link>
            <Link to="/news"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>News</p></Link> 
            <Link to="/business"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>Business</p></Link> 
            <Link to="/politics"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>Politics</p></Link> 
            <Link to="/sports"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>Sports</p></Link> 
            <Link to="/about"><p className='uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]'>About</p></Link> 
        </ul>
      <div className='absolute bottom-8 left-5 flex gap-7 justify-center items-center'>
        <BsTwitter  className=' cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]' />
        <FaFacebookF  className=' cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]' />
        <BsYoutube  className=' cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]' />
        <BsLinkedin  className=' cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]' />
      </div>
    </div>
    </>
  )
}

export default Navbar