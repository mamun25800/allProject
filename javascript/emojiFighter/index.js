let who=document.querySelector("#who")
let emojis=["🐲","🐯","🐴","🦁","🦊","🦒","🐺","🐰","🐻‍❄️","🐼"]
let btnn=document.querySelector("#btn")

function getRandom(){
    return Math.floor(Math.random()*10)
}

btnn.addEventListener("click",function(){
    let first=getRandom()
    let second=getRandom()
    who.textContent=emojis[first]+" VS "+emojis[second]
})