let corp = document.getElementById('corporate_id')
let davlat = document.getElementById('davlat')
let srch = document.getElementById('srch_btn')
let x_srch = document.getElementById('x_srch')

corp.addEventListener("click", function(){
    document.querySelector('body').classList.toggle('corpo')
    document.querySelector('body').classList.remove('tillar')
})
davlat.addEventListener('click', function(){
    document.querySelector('body').classList.remove('corpo')
    document.querySelector('body').classList.toggle('tillar')
})

srch.addEventListener('click', function(){
    let sr_bar = document.getElementById('search_bar').style.transform = 'scale(1)'
    srch.style.transform = 'scale(0)'
    document.getElementById('nav_ul').style.transform = 'scale(0)'
})
x_srch.addEventListener('click', function(){
    let sr_bar = document.getElementById('search_bar').style.transform = 'scale(0)'
    srch.style.transform = 'scale(1)'
    document.getElementById('nav_ul').style.transform = 'scale(1)'
})

let 