require('dotenv').config()
const express=require("express")
const app=express()
const port=process.env.PORT ||3000

const NEWS_SECRETE=process.env.NEWS_API

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_SECRETE);

app.use(express.static('public'))
app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    const search=req.query.input
    console.log(search)
    newsapi.v2.everything({
        sources: 'bbc-news',
        q:search,
        language: 'en',
    }).then(response => {
        const resp=response;
        console.log(resp);
        res.render('index',{resp})
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/',(req,res)=>{
    const inp=req.body.input
})
app.listen(port,()=>{
    console.log("connected")
})