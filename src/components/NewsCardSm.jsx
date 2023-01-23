import React from 'react'

const NewsCardSm = ({url, urlToImage, title}) => {
  return (
    <a href={url} target="_blank">
        <div className='w-[350px] h-[300px] relative hover:scale-[110%]'>
            
            <img src={urlToImage} alt={title} className='object-cover w-full h-full absolute top-0 left-0 z-1' />
            <div className='w-full h-full flex flex-col relative z-2 items-center justify-end p-3 bg-gradient-to-b from-transparent to-black font-thin'>
                <p className='text-sm'>{title}</p>
            </div>
        </div>
    </a>
  )
}

export default NewsCardSm