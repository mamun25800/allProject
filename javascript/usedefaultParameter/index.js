const input=document.querySelector("#input")
const second=document.querySelector("#second")
const text="its just checking what will happend with rest parameter"
const greet="Have a nice day 🎇"
const btn=document.querySelector("#btn")
let nameobj=[]

// function getdiffname(text,greet,...name){
    //     return name.map((nam)=> 
        //         `<div class="container">
    //             <p>Hi! ${nam.name} </p>
    //             <p>${text}</P>
    //             <p>${greet}</p> 
    //         </div>
    //         `
    //     ).join(' ')
    // }
    // second.innerHTML=getdiffname(
        //     text,greet,
        //     {name:"Mamun"},
        //     {name:"Mahim"},
        //     {name:"Jannati"},
        //     {name:"Mijanur"},
        //     {name:"Mywife"}
        // )

        
btn.addEventListener("click",()=>{
    nameobj.push({name:`${input.value}`})

    second.innerHTML=getdiffname(
        text,greet,
        nameobj
    )
    input.value=""
})

function getdiffname(text,greet,nameobj){
    return nameobj.map((nam)=> 
        `<div class="container">
            <p>Hi! ${nam.name} </p>
            <p>${text}</P>
            <p>${greet}</p> 
        </div>
        `
    ).join(' ')
}
