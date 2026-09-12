const promise=fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
promise.then(data=> console.log(data))
.catch(err=>{
    console.log(err)
    throw console.log('there is an error')
})