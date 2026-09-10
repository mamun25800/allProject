const btn=document.querySelector("#btn")
const unit=document.querySelector("#unit")
const length=document.querySelector("#length")
const volume=document.querySelector("#volume")
const mass=document.querySelector("#mass")


btn.addEventListener("click" , function(){
    let valueform=unit.value
    valueform=Number(valueform)
    const kotofeet=valueform*3.281
    const kotometer=valueform*0.3048
    const kotogallons=valueform*0.2642
    const kotoliter=valueform*3.785
    const kotopound=valueform*2.204
    const kotokilo=valueform*0.4535

    length.textContent=`${valueform} meters = ${kotofeet.toFixed(3)} feet | ${valueform} feet = ${kotometer.toFixed(3)} meters`
    volume.textContent=`${valueform} liters = ${kotogallons.toFixed(3)} gallons | ${valueform} gallons = ${kotoliter.toFixed(3)} liters`
    mass.textContent=`${valueform} kilos = ${kotopound.toFixed(3)} pounds | ${valueform} pounds = ${kotokilo.toFixed(3)} kilos`
    unit.value=""
})