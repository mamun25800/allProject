const characters = [
    // Lowercase
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",

    // Uppercase
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    // Numbers
    "0","1","2","3","4","5","6","7","8","9",

    // Special characters
    "!","@","#","$","%","^","&","*",
    "(",")","-","_","+","=",
    "[","]","{","}","|",
    ";",":","'",",",".","<",">","?","/",
    "`","~"
]

let pass1=document.querySelector("#p1")
let pass2=document.querySelector("#p2")
let btn=document.querySelector("#btn")

function genRandom(){
    return Math.floor(Math.random()*characters.length)
}

function create(){
    let pas=""
    for(let i=0;i<15;i++){
        let idx=genRandom()
        pas+=characters[idx]
    }
    return pas
}

btn.addEventListener("click",function(){
    pass1.textContent=create()
    pass2.textContent=create()
    pass1.style.backgroundColor="rgb(24, 24, 67)";
    pass2.style.backgroundColor="rgb(24, 24, 67)";
})