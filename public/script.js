const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

 for(let card of cards){
    card.addEventListener("click",function(){
        const id = card.getAttribute("id")
        window.location.href=`/course/${id}`
    })
} 

