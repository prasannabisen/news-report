const express=require("express")
const app=express()

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bef63e1bb3b84f68a62bc31d486bd332');
    
app.get("/",(req,res)=>{
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,bbc-sport,abc-news',
        q:'uk',
        language: 'en'
    }).then(response => {
    res.send(response.articles[0].source);
    console.log(response.articles[0].source)
}).catch(err=>{
    console.log(err);
})
})

app.listen(3000,()=>{
    console.log("connected")
})