const btn=document.querySelector('#submit')
const time=document.querySelector('#time')
const last=document.querySelector('#last')
const locationinput=document.querySelector('#location')
const title=document.querySelector('#title')
const story = document.querySelector('#story')

btn.addEventListener('click',async(e)=>{
    e.preventDefault()

    try{
        const response=await fetch('/api',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({time:time.value,
                location:locationinput.value,
                title:title.value,
                text:story.value
            })
        })
    }catch(err){
        console.log(err)
    }
    time.value=''
    locationinput.value=''
    title.value=''
    story.value=''
    last.textContent='Successfuly Done!'
})
