// const button1 = document.querySelector('.Academica')
// const button2 = document.querySelector('.Linguagens')
// const button3 = document.querySelector('.SST')
// const modal1 = document.querySelector('#dialog-formacao')
// const modal2 = document.querySelector('#dialog-linguagens')
// const modal3 = document.querySelector('#dialog-SST')
// const buttoClose = document.querySelector("button")



// button1.onclick = function() {
//     modal1.showModal()
// }
// button2.onclick = function() {
//     modal2.showModal()
// }
// button3.onclick = function() {
//     modal3.showModal()
// }

//  const toggleModal = () => {
//      [modal1,modal2].forEach(() => buttoClose.classList.add('button'))

// }
// [modal1, modal2].forEach((el)=> {
//     el.addEventListener('click', ()=> toggleModal())
//     buttoClose.close()
// })


const button1 = document.querySelector('.Academica');
const button2 = document.querySelector('.Linguagens');
const button3 = document.querySelector('.SST');
const modal1 = document.querySelector('#dialog-formacao');
const modal2 = document.querySelector('#dialog-linguagens');
const modal3 = document.querySelector('#dialog-SST');
const closeButtons = document.querySelectorAll(".button");

const AllButton = [button1, button2, button3]
const Allmodal = [modal1, modal2,modal3]


AllButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        Allmodal[index].showModal();
         
    });
});

closeButtons.forEach((button) => {
    
    button.addEventListener('click', () => {
        button.closest('dialog').close();
        Escclose()
        
    });
});

// const closeModal = () => {
//   [modal1, modal2, modal3].forEach(modal => {
//     if (modal.open) {
//       modal.close();
//     }
//   });
// };

// const OpenModal = () => {
//     [button1 ,button1,button1].forEach(button1 => {
//         button.showModal()
//     })
// }

// [button1, button1, button1].forEach(button => {
//     button.addEventListener('click', OpenModal);
//   });

//   AllButton.addEventListener('click', OpenModal);


// [modal1, modal2, modal3].forEach(modal => {
//   modal.addEventListener('click', closeModal);
// });
// closeButton.addEventListener('click', closeModal);

// buttoClose.addEventListener('click', () => {
//     const Allmodal = [modal1, modal2, modal3]
//     for (let i = 0; i < Allmodal.length; i++) {
//       if (Allmodal[i].open) { // Verifica se o modal está aberto
//         Allmodal[i].close();
//       }
//     }
//   });
    






// const closeModalButton = document.querySelector('#close-modal')

// const modal  = document.querySelector('#modal')
// const fade = document.querySelector('#fade')

// const toggleModal = () => {
//     [modal,fade].forEach((el) => el.classList.toggle('hide'))

// }
// [openModalButton, closeModalButton, fade].forEach((el)=> {
//     el.addEventListener('click', ()=> toggleModal())
// })