const key = '084db7f4d39f4d4cb3e19bc59b0a7a10' 


const requests = {
    headline: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}`,
    news: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}&category=general&pageSize=48`,
    business: `https://newsapi.org/v2/top-headlines?apiKey=${key}&category=business&language=en`,
    sports: `https://newsapi.org/v2/top-headlines?apiKey=${key}&category=sports&language=en`,
    tech: `https://newsapi.org/v2/top-headlines?apiKey=${key}&category=technology&language=en`,
    politics: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}&category=technology&pageSize=40`
}
export default requests;



