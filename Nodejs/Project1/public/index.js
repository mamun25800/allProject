try{
    const response = await fetch('/api')
    const responsedata = await response.json()
    render(responsedata)
} catch(err){
    console.log(err)
}

function render(data){
    const container = document.querySelector('.conteiner')
    let stringki = ''
    data.forEach(element => {
        stringki += `<div class="card">
            <div class="time">
                <p class='time-text'>${element.time} PM</p>
                <p class='time-text'>${element.location}</p>
            </div>
            <div class="title">
                <h1 class="t">${element.title}</h1>
            </div>
            <p class="text">${element.text}</p>
            <button class="btn">see more</button>
        </div>`
    })
    container.innerHTML = stringki
}

// একবার container-এর উপর listener বসাও, ভেতরে target চেক করো (event delegation)
document.querySelector('.conteiner').addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){
        const btn = e.target
        const text = btn.previousElementSibling // এই card-এর নিজের .text প্যারাগ্রাফ

        if(btn.textContent === 'see more'){
            btn.textContent = 'see less'
            text.style.maxHeight = 'none'
        } else {
            btn.textContent = 'see more'
            text.style.maxHeight = '100px'
        }
    }
})