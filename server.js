const express=require("express")
const app=express()
const port=process.env.PORT ||3000

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bef63e1bb3b84f68a62bc31d486bd332');

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    const inp=req.body.input
    newsapi.v2.everything({
        sources: 'bbc-news,bbc-sport,abc-news',
        q:inp,
        language: 'en'
    }).then(response => {
        var kk=response.articles;
        var headline="";
        var len=kk.length
        console.log(len)
        for(var i=1;i<len;i++)  
        {
            headline+=`<li>${response.articles[i].title}</li>`
            console.log(response.articles[i].title)
        }
        res.send(headline)
        }).catch(err=>{
            console.log(err);
        })
})

app.listen(port,()=>{
    console.log("connected")
})