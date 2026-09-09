let card=[]
let sum=0
let comment=document.querySelector("#comment")
let cards=document.querySelector("#cards")
let sums=document.querySelector("#sums")
let doadd=true
let isstart=false
let amount=250
let amnt=document.querySelector("#am")

function getrandom(){
  return Math.floor (Math.random()*13)+1
}

function pusharray(a){
    if(a===1){
            card.push(11)
            sum+=card[card.length-1]
        }
        else if(a>10){
            card.push(10)
            sum+=card[card.length-1]
        }
        else{
            card.push(a)
            sum+=card[card.length-1]
    }
}


function startgame(){
    if(sum>=21){
        card=[]
        sum=0
        doadd=true
        isstart=false
        cards.textContent="SUM:"
        comment.style.color="white"
    }
    if(card.length==0 && doadd){
        let n1=getrandom()
        let n2=getrandom()
        pusharray(n1)
        pusharray(n2)
    }
    if(sum<21 && doadd){
        comment.textContent="Draw  the  card"
    }
    else if(sum==21 && doadd){
        comment.textContent="Whooho you are blackjack"
        amount+=10*3
        doadd=false
    }
    else{
        comment.textContent="you are out of the game"
        comment.style.color="red"
        amount-=10
        if(amount<20){
            amount+=250
            comment.textContent="gitf $250 from admin"
        }
        doadd=false
    }
    if(!isstart){
        for(let i=0;i<card.length;i++){
            cards.textContent+=" "+card[i]
        }isstart=true
    }
    sums.textContent="SUM: "+sum
    amnt.textContent="Your amount is: $"+amount
}

function addcard(){
    if(!isstart){
        comment.textContent="Start the game first"
        comment.style.color="red"
    }
    else{
        if(doadd){
            let x=getrandom()
            pusharray(x)
            if(sum<21 && doadd){
                comment.textContent="Draw  the  card"
            }
            else if(sum==21 && doadd){
                comment.textContent="Whooho you are blackjack"
                amount+=3*10
                doadd=false
            }
            else{
                comment.textContent="you are out of the game"
                comment.style.color="red"
                amount-=10
                if(amount<20){
                    amount+=250
                    comment.textContent="gitf $250 from admin"
                }
                doadd=false
            }
            if(isstart){
                cards.textContent="SUM:"
                for(let i=0;i<card.length;i++){
                    cards.textContent+=" "+card[i]
                }isstart=true
            }
            sums.textContent="SUM: "+sum
            amnt.textContent="Your amount is: $"+amount
        }
        else{
            comment.textContent="Yout are already out of game. Start the game first"
            comment.style.color="red"
        }
    }
}


