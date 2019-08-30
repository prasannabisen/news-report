const express=require("express")
const app=express()
const port=process.env.PORT ||3000

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bef63e1bb3b84f68a62bc31d486bd332');

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    var headline
    const search=req.query.input
    console.log(search)
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,bbc-sport,abc-news',
        q:search,
        language: 'en'
    }).then(response => {
        const resp=response;
        console.log(resp);
        res.render('index',{resp})
})
})

app.post('/',(req,res)=>{
    const inp=req.body.input
})
app.listen(port,()=>{
    console.log("connected")
})