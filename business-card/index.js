const input=document.querySelector("#input")
const second=document.querySelector("#second")
const text=" Glad you're here! 😊 Hope you're having a great day. Stay happy and keep smiling! ❤️✨"

const greet="Wishing you all the best from my side. 🎊🎉✨"
const btn=document.querySelector("#btn")
const card=document.querySelector(".card")


btn.addEventListener("click",()=>{
    const name=input.value
    second.innerHTML=getdiffname(
        text,greet,name
    )
    input.value=""
    card.style.margin="50px auto"
})

function getdiffname(text,greet,value){ 
       return `<div class="container">
            <p>Hey  ${value} , </p>
            <p>${text}</P>
            <p>${greet}</p> 
        </div>
        `
}
