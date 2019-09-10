const headline=document.getElementsByClassName('headline')
const btn=document.getElementsByClassName('btn')

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function(){
        console.log(headline)
    })
}