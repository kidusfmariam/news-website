import React from 'react'
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai'
import {CiTwitter, CiLinkedin} from 'react-icons/ci'
const Footer = () => {
  return (
    <div className='w-full h-[240px] text-white'>
        <hr className='w-full text-slate-600 h-[0.1px] font-thin' />
    <div className='w-[85%] mx-auto pt-[2.3rem] pb-2 '>
        <div className='w-[60%]'>
         <h1 className='text-3xl mb-4'>Subscribe to our <span className='text-[#fc444a]'>Newsletter</span> for <span className='text-[#fc444a]'>daily updates!</span> </h1>
         <input className='bg-black border-b mr-2 border-b-white outline-none text-2xl text-gray-400 my-4 w-[140%] sm:w-[50%]' type="email" placeholder='Email' /><br></br>
         <button type='submit' className='my-3 uppercase text-xl font-light border p-1 hover:text-[#fc444a] hover:border-[#fc444a]'>Subscribe</button>
        </div>

        

    </div>
    
    <footer className='text-center text-white bg-black mt-3 mb-[1.3rem]'>
            <ul className='list-style-none text-[#fc444a] w-[60%] mx-auto text-center flex gap-[3rem] justify-center mb-7'>
                <li><AiOutlineFacebook size={32}/></li>
                <li><AiOutlineYoutube size={32}/></li>
                <li><CiTwitter size={32}/></li>
                <li><CiLinkedin size={32}/></li>

            </ul>
            <p className='text-center font-thin text-slate-500'>&#169; Designed and Developed by 
            <a href="https://github.com/kidusfmariam" target="_blank" className='text-[#fc444a]'> Kidus Ayalew.</a>
            </p>
        </footer>
    </div>
  )
}

export default Footer