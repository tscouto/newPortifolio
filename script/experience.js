


function showModalPageExperience() {
  const buttonLavori = document.querySelector('#button-lavori');
  const buttonSulNorte = document.querySelector('#button-sulnorte');
  const buttonFerju = document.querySelector('#button-ferju');
  const modalLavori = document.querySelector('#dialog-lavori');
  const modalsulNorte = document.querySelector('#dialog-sulnorte');
  const modalferju = document.querySelector('#dialog-ferju');
  const closeButtonTraning = document.querySelectorAll(".button");

  const AllButtonExperience = [buttonLavori, buttonSulNorte, buttonFerju]
  const AllmodalExperience = [modalLavori, modalsulNorte,modalferju]

  AllButtonExperience.forEach((button, index) => {
      button.addEventListener('click', () => {
        AllmodalExperience[index].showModal();
           
      });
  });

  closeButtonTraning.forEach((button) => {
      
      button.addEventListener('click', () => {
          button.closest('dialog').close();
          
          
      });
  });
}
showModalPageExperience()

// showModalPageProject()
// showModalPageExperience()

  
  // showModalPageTraning()
  // showModalPageProject()
  // showModalPageExperience()


// const text = document.getElementById('text')
// const text1 = document.getElementById('text1')
// text.innerText = `Olá, meu nome é Tiago, tenho ${this.idade} anos, sou do estado de Santa Catarina, mais precisamentemoro na cidade de Imbituba. Amante da tecnologia e facinado por livros de ficção fantasia e científica.No começo da minha jornada de trabalho, minha área foi na segurança do trabalho, com objetivo em busca de redução de acidentes. Porém ao me deparar com uma situação, onde precisava de um sistema que poderia me gerenciar e melhorar minha gestão de trabalho. Percebi que precisava de um sistema, onde o meu primeiro contato com aprogramação foi a linguagem VBA (Visual Basic).`
// text1.innerText = `Onde nele poderia facilmente criar um sistema para melhorar meu processo de trabalho. Onde comecei a me interessar na programação e vi como é importante a tecnologia. Com isso ingressei na faculdade de engenharia de software para poder me aprofundar ainda mais na área de programação.Hoje atualmente estou em busca de mudança de área, para começar na área de programação.`

// document.appendChild(text)
// document.appendChild(text1)

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
