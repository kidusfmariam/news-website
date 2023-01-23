import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const NewscardLg = ({title, image, description, author, link}) => {
  return (
    <div className='md:w-[900px] w-[400px] h-[400px] sm:h-[250px] flex flex-col sm:flex-row gap-2 items-center justify-center border border-slate-900 my-4 sm:p-3 py-3 rounded-sm'>
            <img src={image} alt="title" className='sm:w-[200px] w-full h-[170px] my-1  sm:h-[200px] object-cover'/>
      
        <div className='px-3'>
            <h1 className='text-[15px] sm:text-lg my-1'>{title}</h1>
            <p className='sm:text-sm text-[13px] text-gray-400 my-1 font-thin'>{description}</p>
            <p className='text-md text-gray-300 my-1'>{author}</p>
            <a href={link} target="_blank" className='text-sm mt-3 font-light flex gap-2 items-center text-[#fc444a] '>Read More <AiOutlineArrowRight/></a>
        </div>
    </div>
  )
}

export default NewscardLg