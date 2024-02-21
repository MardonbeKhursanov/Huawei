let con_clck = document.getElementById('consumer')

con_clck.addEventListener('click', function(){
    document.getElementById('consumer_boxes').classList.toggle('con-he')
    document.querySelector('.con-i').classList.toggle('fa-angle-up')
    document.querySelector('.con-i').classList.toggle('fa-angle-down')
})