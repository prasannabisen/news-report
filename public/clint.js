const headline=document.getElementsByClassName('headline')
const btn=document.getElementsByClassName('btn')
const frame=document.getElementsByClassName('frame')
console.log(frame)
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function(event){
    frame.innerHTML=`<iframe scr=${event.target.dataset.url}></iframe>`
    })
}