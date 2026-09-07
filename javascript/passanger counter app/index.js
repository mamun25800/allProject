let el=document.getElementById("count")
let commentEl=document.getElementById("commentt")
let cnt=0
let rel=0

function increment(){
    if(cnt<0) cnt=0
    cnt+=1
    el.innerText=cnt
    console.log(cnt)
}
function decrement(){
    cnt-=1
    if(cnt>=0)
    el.innerText=cnt
    else el.innerText="🙃"
    console.log(cnt)
}
function save(){
    if(cnt>=0){
    el.innerText="Total People Entered= "+cnt
    commentEl.textContent+=' '+cnt+','
    el.textContent=0;
    cnt=0;
    }
    else el.innerText="Your Joke was Interesting.😁"
}