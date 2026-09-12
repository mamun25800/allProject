// async function getdata(){
// const response= await fetch('https://apis.scrimba.com/bored/api/activity')
// const data=await response.json()
// console.log(data)
// }
// getdata()

// try{
//     const response= await fetch('https://apis.scrimba.com/bored/api/activity')//akhane endpoint ar kisu vul likhleo response asbe taile to jamela ai jonno response ar akta ok property ase jeta use korbo
//     if(!response.ok){
//         throw new Error('aita catch a chole jabe jodi error hoy ')
//     }
//     const data=await response.json()

//     console.log(data)
// }catch(err){
//     console.log(err)
// }finally{
//     console.log('sobsomoy ata run kore ')
// }

//https://apis.scrimba.com/jsonplaceholder
//endpoint=/posts

//fetch ar duita parameter thake akta url arekta ki korte chay post get naki 


try{
    const response=await fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
        method:'post',
        body:JSON.stringify({ // ar mane holo ai data gula post koro .korar pore server response pathay bolse j thik ase ar aita ami id 101 a save korsi
            title:'holiday',
            body:'whie hej kdhf ',
            userid:10
        }),
        headers:{// aita deoyar por sob kisu dibe mane jei id te save korsilo setar sob kisu type jeta dibo tar upor base kore 
            'Content-Type':'application/json'//aita na dile bodyte kivabe save korbe ja buje na 
        }
    })
    const data = await response.json()
    console.log(data)
}catch(err){
    console.log(err)
}


//nije promise create korar jonno
const promise=new Promise((resolve,reject)=>{
    const success=Math.random()>.5
    if(success) 
        resolve('success')
    else reject('reject')
})

// promise.then(response=>{
//     console.log(response)
// })

try{
    const response=await promise
    console.log(response)
}catch(err){
    console.log(err)
}


function preloadingImg(url){
    return new Promise((resolve,reject)=>{
        const img=new Image()
        img.src=url
        img.alt="a beautiful image"
        img.addEventListener('load',()=>resolve(img))
        img.addEventListener('error',()=>reject('img has not found'))
    })
}
try{
    const results=await preloadingImg('akdfhasdjfh asdj')
    console.log(results)
    document.querySelector('#imgahd').appendChild(results)
}catch(err){
    console.log(err)
}





// sadaronoto joto promise create kori na kno oder jodi call kori jar joto  somoy lagar kotha toto smoy por result dibe 






// promise.all() হলো JavaScript-এর এমন একটি method, যেটা দিয়ে একসাথে একাধিক Promise চালিয়ে সবগুলোর result একসাথে পাওয়া যায়।

// সহজভাবে:

// অনেকগুলো asynchronous কাজ → সব শেষ হওয়া পর্যন্ত অপেক্ষা → সব result একসাথে পাওয়া।

// 1. ধরো ৩টা Promise আছে
// const p1 = Promise.resolve("Apple");
// const p2 = Promise.resolve("Banana");
// const p3 = Promise.resolve("Mango");

// এখন আলাদাভাবে .then() না করে:

// Promise.all([p1, p2, p3])
//     .then(data => {
//         console.log(data);
//     });

// Output:

// ["Apple", "Banana", "Mango"]

// অর্থাৎ:

// p1 ──→ Apple ──┐
// p2 ──→ Banana ──┼──→ Promise.all() ──→ সব result
// p3 ──→ Mango ──┘
// 2. fetch() দিয়ে সবচেয়ে ভালো বোঝা যাবে

// ধরো তোমার ৩টা API থেকে data লাগবে:

// const users = fetch("/users");
// const posts = fetch("/posts");
// const products = fetch("/products");

// তিনটিই Promise return করছে।

// তুমি করতে পারো:

// const responses = await Promise.all([
//     users,
//     posts,
//     products
// ]);

// এখন responses-এর মধ্যে তিনটা response থাকবে।

// তারপর:

// const data = await Promise.all(
//     responses.map(response => response.json())
// );

// এখন তিন API-এর actual data পাবে।

// 3. আরও সহজ example
// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("First"), 2000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Second"), 1000);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("Third"), 3000);
// });

// এখন:

// Promise.all([p1, p2, p3])
//     .then(data => {
//         console.log(data);
//     });

// এখানে:

// p1 → 2 sec
// p2 → 1 sec
// p3 → 3 sec

// Promise.all() ৩ সেকেন্ডের পর result দেবে, কারণ সবচেয়ে বেশি সময় লাগা Promise (p3) শেষ না হওয়া পর্যন্ত সব result পাওয়া যাচ্ছে না।

// Output:

// ["First", "Second", "Third"]

// খেয়াল করো, output-এর order হলো:

// p1 → First
// p2 → Second
// p3 → Third

// যদিও p2 আগে শেষ হয়েছিল।

// 4. একটা Promise fail করলে?

// এটাই খুব গুরুত্বপূর্ণ।

// const p1 = Promise.resolve("Success 1");

// const p2 = Promise.reject("Error");

// const p3 = Promise.resolve("Success 3");

// Promise.all([p1, p2, p3])
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// এখানে p2 reject করেছে।

// তাই Promise.all() পুরোটা reject করবে।

// p1 → ✅
// p2 → ❌
// p3 → ✅

// Promise.all()
//      ↓
//     ❌
//    catch()
// 5. তাহলে কখন Promise.all() ব্যবহার করব?

// যখন তোমার একাধিক independent asynchronous কাজ আছে এবং সবগুলোর result দরকার।

// যেমন:

// User information
//       +
// User posts
//       +
// User comments
//       ↓
// একসাথে load

// তখন Promise.all() খুব useful।

// মনে রাখার shortcut:
// Promise.all([promise1, promise2, promise3])

// মানে:

// "এই তিনটা Promise-এর সবগুলো শেষ হওয়া পর্যন্ত অপেক্ষা করো, তারপর আমাকে সব result একসাথে দাও।"