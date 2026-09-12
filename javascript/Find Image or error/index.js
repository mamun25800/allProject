function getimagepromise(url){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            const im=new Image()
            im.src=url
            im.id="img"
            im.addEventListener('load',()=> resolve(im))
            im.addEventListener('error',()=> reject(`this url ${url} image not found`))
       },5000)
    })
}

const urlar=[
    'image/one.jpg',
    'image/two.jpg',
    'image/three.jpg',
    'image/four.jpg'
]

async function adddiv(array) {
    const def=document.querySelector(".default")
    const container=document.createElement('div')
    container.id="container"

    // const promise= array.map((urll)=>{
    //   return  getimagepromise(urll)
    // })
    try{
        def.style.display="none"
        for(const url of array){
            const im= await getimagepromise(url)
            container.appendChild(im)
            document.body.appendChild(container)
        }
        // const results=await Promise.all(promise)
        // console.log('success')
        // results.forEach((imgg)=>{
        //     container.appendChild(imgg)
        //     document.body.appendChild(container)
        // })
        // def.style.display="none"
    }catch(err){
        console.log(err)
    }
}

document.querySelector("#btn").addEventListener("click",()=> adddiv(urlar))