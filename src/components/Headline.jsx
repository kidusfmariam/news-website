import React, { useState, useEffect } from 'react'
import axios from 'axios'
import key from '../requests'
import NewsCardSm from './NewsCardSm'

const Headline = () => {
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
    const getLatest = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}&from=${new Date()}`)
        console.log(response.data.articles)
        setData(response.data.articles)
    }
    getLatest()
    console.log(data)
    }, []);

  return (
       <div className='flex flex-wrap w-full items-center justify-center gap-7 mt-5'>
        {data.slice(13, 19).map((item, index) => (
            <NewsCardSm 
                key={index+1}
                url = {item.url}
                title={item.title}
                urlToImage={item.urlToImage}
            />
        ))}
       </div> 
  )
}

export default Headline