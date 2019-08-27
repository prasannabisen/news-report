const express=require("express")
const app=express()

const input=document.getElementById("input")
const button=document.getElementById("button")


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bc39086298154fd1a28885f45bf62b4d');
    

app.get("/",(req,res)=>{
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,bbc-sport',
        q: 'Cricket',
        language: 'en'
    }).then(response => {
    res.send(response);
}).catch(err=>{
    console.log(err);
})
})

app.listen(3000,()=>{
    console.log("connected")
})