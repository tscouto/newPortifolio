const button = document.querySelector('.Academica')
const modal = document.querySelector('dialog')
const buttoClose = document.querySelector("dialog button")

button.onclick = function() {
    modal.showModal()
}

buttoClose.onclick = function() {
    modal.close()
}



// const closeModalButton = document.querySelector('#close-modal')

// const modal  = document.querySelector('#modal')
// const fade = document.querySelector('#fade')

// const toggleModal = () => {
//     [modal,fade].forEach((el) => el.classList.toggle('hide'))

// }
// [openModalButton, closeModalButton, fade].forEach((el)=> {
//     el.addEventListener('click', ()=> toggleModal())
// })