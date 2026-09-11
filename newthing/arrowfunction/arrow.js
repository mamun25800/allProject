//Arrow function:
// function (amni){
//     return `amar name ${amni}`
// }// aita kintu error hobe karon return variable  a rakhsi na 


const nameki =function(name){
	return name
}
const namekii = (name)=>{ //one parameter hole bracket not needed
	return name
}// one line hole second bracket o dorkar nai abar return ar o dorkar nai 



// function getspeed(speed){
//     return `you are the speed on${speed}`
// }
getspeed= speed => `you are speed on ${speed}`
console.log(getspeed(40))

const distanceTraveledMiles=[2,3,2,1,2]
// const distanceTraveledKm= distanceTraveledMiles.map(function(distance){
//     return Math.round(distance*1.6)
// })
//console.log(distanceTraveledKm)
const distanceTraveledKm= distanceTraveledMiles.map( distance=> Math.round(distance*1.6) )

const total=distanceTraveledMiles.reduce((sum,item)=> sum+item,5 )//reduce duita parameter ney second ta initial value
console.log(total)

//default parameter holo kono function a jodi amra kono parameter na dei tahole oita default vabe oita dore nibe 
//like;
function check(one,two = 0){
    return one+two
}

//rest parameter
function check2(permissionleve,...name){//rest parameter must last a dite hobe //and akta rest parameter thakbe 
    //name ar vitor array akare thakbe joto khusi dite pari
    name.map( nam=> console.log(`${nam} is find ${permissionleve} permission` ))
}
check2('admin','mamun','mahin')

//.join("kidiye prottek element k separate korte chao") arr ar protteck element k akta element a convert kore 

//callback function 
//kono function ar vitor argument hisebe another function pass kora

function notifyuse(notificationfn){
    notificationfn()
}
const emailnotification=()=> console.log('emain sent')
const smsnotification=()=> console.log('sms sent')
notifyuse(emailnotification)
notifyuse(smsnotification)