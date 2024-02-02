let corp = document.getElementById('corporate_id')
let davlat = document.getElementById('davlat')

corp.addEventListener("click", function(){
    document.querySelector('body').classList.toggle('corpo')
    document.querySelector('body').classList.remove('tillar')
})
davlat.addEventListener('click', function(){
    document.querySelector('body').classList.remove('corpo')
    document.querySelector('body').classList.toggle('tillar')
})