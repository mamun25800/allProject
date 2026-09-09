let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let ulEl=document.querySelector("#ulEl")
let btn1=document.querySelector("#btn1")
let cmt=document.querySelector("#cmt")
let leads=[]


btn.addEventListener("click",function(){
    leads.push(input.value)
    input.value=""
    render()
     localStorage.setItem("leads",JSON.stringify(leads)) //akhane kintu amar leads veriable k stringify korse na okhane theke sudu data nisse
})

function render(){
    ulEl.innerHTML=``
    for(let i=0;i<leads.length;i++){
        ulEl.innerHTML+=`
        <a href='${leads[i]}' target='_blank'>
        <li>${leads[i]}</li>
        <a/>
        `
    }
    
}

let value=JSON.parse(localStorage.getItem("leads"))
if(value){
    leads=value
    render()
}

btn1.addEventListener("dblclick",function(){
    localStorage.clear()
    ulEl.innerHTML=``
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
