import {getstockdata}  from "./fakeStockAPI.js";

setInterval(function(){
    const data=getstockdata();
    render(data)
},1500)

let prevprice=null
function render(dataa){
    const namee=document.querySelector("#name")
    const symboll=document.querySelector("#symbol")
    const pricee=document.querySelector("#price")
    const timee=document.querySelector("#time")
    const img=document.querySelector("#img")
    const {name,symbol,price,time}=dataa
    const imgsrc= price>prevprice ? 'up-arrow.png' : prevprice>price ? 'OIP (1).jpg' : 'OIP (2).jpg'
    namee.textContent=`Name: ${name}`
    symboll.textContent=`Symbol: ${symbol}`
    pricee.textContent=`Price: ${price.toFixed(2)}`
    timee.textContent=`Time: ${time}`
    img.src=`icon/${imgsrc}`
    pricee.appendChild(img)
    prevprice=price
}



