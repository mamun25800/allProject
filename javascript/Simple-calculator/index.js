let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let result=document.getElementById("res")

num1.textContent=8
num2.textContent=2
let a=8
let b=2

function sum(){
    result.textContent="sum is: "+(a+b)
}
function sub(){
    result.textContent="substract is: "+(a-b)
}
function mul(){
    result.textContent="multiply is: "+(a*b)
}
function div(){
    result.textContent="division is: "+(a/b)
}