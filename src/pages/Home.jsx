import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Headline from '../components/Headline'
import requests from '../requests'
import NewscardLg from '../components/NewscardLg'
import key from '../requests'
const Home = () => {
  const [news, setNews] = useState([]);
  const [sports, setSports] = useState([]);
  
  useEffect(() => {
  const getLatest = async() => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${key}&category=business&country=us`)
      console.log(response.data.articles)
      setNews(response.data.articles)
  }
  getLatest()
  console.log(news)
  }, [news]);

  useEffect(() => {
    const getLatest = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${key}&category=sports&country=us`)
        console.log(response.data.articles)
        setSports(response.data.articles)
    }
    getLatest()
    console.log(sports)
    }, [news]);
  
  

  return (
    <div className='w-[85%] mx-auto h-[100vh] text-white relative pt-[9.5rem] '>
      <h1 className='text-3xl'>Latest Headlines</h1>
      <div className='w-full py-5'>
        <Headline />
      </div>

      <h1 className='text-5xl font-light my-4 text-center uppercase'>Business</h1>
      <div className='w-full py-5 flex flex-col items-center justify-center'>
      {news.slice(5,9).map(item =>(
        <NewscardLg
          image={item.urlToImage} 
          title={item.title}
          author={item.author}
          description={item.description} 
          link={item.url}    
          />
      ))}
      </div>


      <h1 className='text-5xl font-light my-4 text-center uppercase'>Sports</h1>
      <div className='w-full py-5 flex flex-col items-center justify-center'>
      {sports.slice(5,9).map(item =>(
        <NewscardLg
          image={item.urlToImage} 
          title={item.title}
          author={item.author}
          description={item.description} 
          link={item.url}    
          />
      ))}
      </div>


    </div>
  )
}

export default Home