const headline=document.getElementsByClassName('headline')
const btn=document.getElementsByClassName('btn')
const fram=document.getElementsByClassName('fram')
console.log(fram)
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function(event){
        fram[i].innerHTML=`<iframe class="fra" src="${event.target.dataset.url}"></iframe>`
    })
}