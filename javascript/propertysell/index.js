import property from "./property.js";
import defaultproperty from "./defaultproperty.js";

function renderproperty(pro=[defaultproperty]){
   
   return pro.map(obj=>{
        const {name,price,text,arr,image} =obj
        const motkoto=arr.reduce((sum,arrel)=> sum+arrel,0)
        return `
            <div id="container">
                <div>
                    <img src="${image}">
                </div>
                <div id="text">
                    <h2>${name}</h2>
                    <p>$${price}</p>
                    <p id="ttt">${text} </p>
                    <h4>${motkoto} m<sup>2</sup></h4>
                </div>
            </div>

            `
    }).join(' ')
}   

document.body.innerHTML=renderproperty(defaultproperty)