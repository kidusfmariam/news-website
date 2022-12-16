import React, { useState, useEffect } from 'react'
import axios from 'axios'
import key from '../requests'

const Headline = () => {
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
    const getLatest = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
        console.log(response.data.articles)
        setData(response.data.articles)
    }
    getLatest()
    // console.log(data)
    }, [data]);

  return (
       <div className='flex flex-wrap w-full items-center justify-center gap-7 mt-5'>
        {data.slice(2, 8).map((item, index) => (
            <a href={item.url} target="_blank" key={index+1}>
            <div className='w-[350px] h-[200px] relative hover:scale-[110%] rounded-lg'>
                <img src={item.urlToImage} alt={item.title} className='object-cover w-full h-full absolute top-0 left-0 z-1 rounded-lg' />
                <div className='w-full h-full flex flex-col relative z-2 items-center justify-end p-3 bg-gradient-to-b from-transparent to-black font-thin'>
                    <p className='text-sm'>{item.title}</p>
                </div>
            </div>
            </a>
        ))}
       </div> 
  )
}

export default Headline