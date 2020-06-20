const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

 for(let card of cards){
    card.addEventListener("click",function(){
        const id = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${id}`
    })
} 

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')

    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    }
    
})

document.querySelector('.maximize-modal').addEventListener("click", function(){
    modal.classList.toggle('maximize')
})
