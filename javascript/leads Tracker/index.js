const input=document.querySelector("#input")
const btn=document.querySelector("#btn")
const ulEl=document.querySelector("#ulEl")
const btn1=document.querySelector("#btn1")
const cmt=document.querySelector("#cmt")
const btnt=document.querySelector("#btnt")
//const value=JSON.parse(localStorage.getItem("myleads"))
const see=document.querySelector("#see")
let leads=JSON.parse(localStorage.getItem("myleads"))||[]//mane prothome localstorage theke parse kori jodi vlaue na thake taile empy array rakhbo



btn.addEventListener("click",function(){
    if(input.value!=""){
    leads.push(input.value)
    input.value=""
    render(leads)
    localStorage.setItem("myleads",JSON.stringify(leads))} //akhane kintu amar leads veriable k stringify korse na okhane theke sudu data nisse
})

// const tabs=[
//     {url:"https://www.facebook.com"} chorome aivabe url theke tabs a 
// ]

btnt.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        leads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(leads))
        render(leads)
    })
})


btn1.addEventListener("dblclick",function(){
    localStorage.clear()
    ulEl.innerHTML=``
    leads=[]
})
btn1.addEventListener("mouseover",function(){
    let p=document.createElement("p")
    p.textContent="Are you sure ?🥶 If yes double click."
    p.style.border="2px solid black"
    p.style.padding="5px 2px"
    p.style.borderRadius="5px"
    cmt.appendChild(p)
    btn1.addEventListener("mouseleave",function(){
        p.remove()
    })
})

see.addEventListener("click",function(){
    if(leads.length>0){
        render(leads)
    }
})



function render(arr){
    ulEl.innerHTML=``
    for(let i=0;i<arr.length;i++){
        ulEl.innerHTML+=`
        <a href='${arr[i]}' target='_blank'>
        <li>${arr[i]}</li>
        <a/>
        `
    }
    
}


