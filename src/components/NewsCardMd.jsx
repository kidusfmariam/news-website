import React from 'react'

const NewsCardMd = ({urlToImage, url, title}) => {
  return (
    <div className='w-[240px] min-h-[200px] max-h-auto flex flex-col items-start'>
        <img src={urlToImage} alt={title} className='w-full h-[150px] object-cover' />
        <p className='text-sm font-extralight'>{title}</p>
      
    </div>
  )
}

export default NewsCardMd
