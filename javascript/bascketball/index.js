let cnthome=0
let cntguest=0

let home=document.getElementById("h")
let guest=document.getElementById("g")

function addoneh(){
    cnthome++
    home.textContent=cnthome
}

function addtwoh(){
    cnthome+=2
    home.textContent=cnthome
}

function addthreeh(){
    cnthome+=3
    home.textContent=cnthome
}


function addoneg(){
    cntguest++
    guest.textContent=cntguest
}

function addtwog(){
    cntguest+=2
    guest.textContent=cntguest
}

function addthreeg(){
    cntguest+=3
    guest.textContent=cntguest
}



