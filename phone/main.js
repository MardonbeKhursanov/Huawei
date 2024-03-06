let con_clck = document.getElementById('consumer')

con_clck.addEventListener('click', function(){
    document.getElementById('consumer_boxes').classList.toggle('con-he')
    document.querySelector('.con-i').classList.toggle('fa-angle-up')
    document.querySelector('.con-i').classList.toggle('fa-angle-down')
})

let body = document.querySelector('body')
let images = document.getElementById("carusel")
let leftBtn = document.getElementById("left")
let rightBtn = document.getElementById("right")

let img = document.querySelectorAll("#carusel img")

let index = 0
function changeImg(){
    if(index > img.length -1){
        index = 0
    }
    else if(index < 0){
        index = img.length -1
    }
    images.style.transform = `translateX(${index * -100}%)`

}





rightBtn.addEventListener("click", function(){
    index++
    changeImg()
    resetInterval()
})
leftBtn.addEventListener("click", function(){
    index--
    changeImg()
    resetInterval()
})
let interval = setInterval(run, 3000)

function run(){
    index++
    changeImg()
}
function resetInterval(){
    clearInterval(interval)

    let interval = setInterval(run, 3000)
}

let srchBtn = document.getElementById('srch-btn')
let xSrch = document.getElementById('x-btn')
let serach = document.querySelector('search')
srchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('active-srch')
})
xSrch.addEventListener('click', function(){
    document.querySelector('body').classList.remove('active-srch')
})
serach.addEventListener('scroll', function(){
    document.querySelector('body').classList.remove('active-srch')
})

document.getElementById('menu').addEventListener('click', function(){
    body.classList.toggle('active')
})