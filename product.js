document.getElementById('open-modal-btn').addEventListener('click', function(){
    document.getElementById('my-modal').classList.add('open')
})

document.getElementById('close-my-modal-btn').addEventListener('click', function(){
    document.getElementById('my-modal').classList.remove('open')
})

document.getElementById('my-modal').addEventListener('click', function(){
    if (event.target == this){
        this.classList.remove('open')
    }
})