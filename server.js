const express=require("express")
const app=express()

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bef63e1bb3b84f68a62bc31d486bd332');

app.set('view engine','html')

app.get("/",(req,res)=>{
    newsapi.v2.everything({
        sources: 'bbc-news,bbc-sport,abc-news',
        q:'uk',
        language: 'en'
    }).then(response => {
        res.render('index')
        const list=document.getElementById('list')
        var kk=response.articles;
        var len=kk.length
        console.log(len)
        for(var i=0;i<len;i++)
        {
            list.innerHTML+=response.articles[i].title
            console.log(response.articles[i].title)
        }
}).catch(err=>{
    console.log(err);
})
})

app.listen(3000,()=>{
    console.log("connected")
})