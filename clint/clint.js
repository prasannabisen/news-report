const Newsapi=require('newsapi')
const newsapi=new Newsapi('00ae3dd0af034007acb677e08fd91e96')

const news=document.getElementById("heading");

console.log(news)

newsapi.v2.topHeadlines({
    sources: 'bbc-news,the-verge',
    q: 'bitcoin',
    category: 'business',
    language: 'en',
    country: 'us'
  }).then(response=>{
      console.log(response)
  })