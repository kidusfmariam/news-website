import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import key from '../requests';
const News = () => {
  const [latest, setLatest] = useState([])
  const [news, setNews] = useState([])
  
  useEffect(() => {
  const getLatest = async() => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${key}&language=en&from=${new Date()}`)
      console.log(response.data.articles)
      setLatest(response.data.articles)
  }
  getLatest()
  console.log(latest)
  }, []);


  useEffect(() => {
    const getNews = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${key}&language=en`)
        console.log(response.data.articles)
        setNews(response.data.articles)
    }
    getNews()
    console.log(news)
    }, []);
  

  return (
    <div className='w-[85%] mx-auto pt-[7rem] bg-white'>
      <div className='flex items-center justify-center gap-5'>
          <div className='relative'>
            <img src={latest.urlToImage} alt={latest.title} className="w-full h-full" />

          </div>
      </div>
    </div>
  )
}

export default News