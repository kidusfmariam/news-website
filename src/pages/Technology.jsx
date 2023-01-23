import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../requests';
import NewsCardMd from '../components/NewsCardMd';
const Technology = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getLatest = async() => {
        const response = await axios.get(requests.politics)
        console.log(response.data.articles)
        setData(response.data.articles)
    }
    getLatest()
    console.log(data)
    }, []);

    
  return (
    <div className='w-[85%]  mx-auto pt-[10rem] flex flex-wrap sm:flex-row flex-col items-start justify-center gap-3 text-white'>
      {data.map(item => (
        <NewsCardMd 
        url = {item.url}
        title={item.title}
        urlToImage={item.urlToImage}
    />
      ))}
      
     
    </div>
  )
}

export default Technology