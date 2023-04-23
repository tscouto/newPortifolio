



function calcularIdade(dataNascimento) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascimento = dataNascimento.getFullYear();
  var idade = anoAtual - anoNascimento;

  var mesAtual = dataAtual.getMonth() + 1;
  var mesNascimento = dataNascimento.getMonth() + 1;

  if (mesAtual < mesNascimento) {
    idade--;
  } else if (mesAtual == mesNascimento) {
    var diaAtual = dataAtual.getDate();
    var diaNascimento = dataNascimento.getDate();

    if (diaAtual < diaNascimento) {
      idade--;
    }
  }

  return idade;
}


var dataNascimento = new Date('1989-11-02'); // Substitua com sua data de nascimento
var idade = calcularIdade(dataNascimento);
// console.log(idade)

// About


const mostrarTexto = () => {
  const text = document.querySelector('#text')
  const text1 = document.querySelector('#text1')
  const field = document.querySelector('esquerda')
  const idade = 27 // supondo que a idade seja 27
  text.innerText = `Olá, meu nome é Tiago, tenho ${idade} anos, sou do estado de Santa Catarina, mais precisamente moro na cidade de Imbituba. Amante da tecnologia e fascinado por livros de ficção fantasia e científica. No começo da minha jornada de trabalho, minha área foi na segurança do trabalho, com objetivo em busca de redução de acidentes. Porém ao me deparar com uma situação, onde precisava de um sistema que poderia me gerenciar e melhorar minha gestão de trabalho. Percebi que precisava de um sistema, onde o meu primeiro contato com a programação foi a linguagem VBA (Visual Basic).`
  text1.innerText = `Onde nele poderia facilmente criar um sistema para melhorar meu processo de trabalho. Onde comecei a me interessar na programação e vi como é importante a tecnologia. Com isso ingressei na faculdade de engenharia de software para poder me aprofundar ainda mais na área de programação. Hoje atualmente estou em busca de mudança de área, para começar na área de programação.`
  
  field.body.appendChild(text)
  field.body.appendChild(text1)
  
  
}



// Page training 
function showModalPageTraning() {
  const buttonAcademia = document.querySelector('#Academica');
  const buttonLinguagens = document.querySelector('#Linguagens');
  const buttonSST = document.querySelector('#SST');
  const modalFormacao = document.querySelector('#dialog-formacao');
  const modalLinguagens = document.querySelector('#dialog-linguagens');
  const modalSST = document.querySelector('#dialog-SST');
  const closeButtonTraning = document.querySelectorAll(".button");

  const AllButtonTraning = [buttonAcademia, buttonLinguagens, buttonSST]
  const AllmodalTraning = [modalFormacao, modalLinguagens,modalSST]

  AllButtonTraning.forEach((button, index) => {
      button.addEventListener('click', () => {
        AllmodalTraning[index].showModal();
           
      });
  });

  closeButtonTraning.forEach((button) => {
      
      button.addEventListener('click', () => {
          button.closest('dialog').close();
          Escclose()
          
      });
  });
}



function showModalPageProject() {
const buttonBurning = document.querySelector('#button-sistema-gestao');
const buttonLavori = document.querySelector('#button-sistema-lavori');
const buttonSiteDev = document.querySelector('#button-site-dev');
const buttonSiteComics = document.querySelector('#button-site-DC-COMICS');
const buttonPortoWine = document.querySelector('#button-site-PortWine');
const buttonGoBus = document.querySelector('#button-site-GO-BUS');
const buttonSitAdvertencia= document.querySelector('#button-sistema-Advertencia');
const buttonDoseProjetada = document.querySelector('#button-doseProjetada');
const buttonguessingGame = document.querySelector('#button-guessingGame');

const modalBurning = document.querySelector('#Sistema-Incendio');
const modalLavori = document.querySelector('#sitema-Lavori');
const modalSiteDev = document.querySelector('#site-Dev');
const modalDCcomics = document.querySelector('#Site-COMICS');
const modalPortWine = document.querySelector('#Site-PortWine');
const modalGoBus = document.querySelector('#site-GO-BUS');
const modalSistemAdvetemcia = document.querySelector('#Sistem-Adertencia');
const modaldoseProjetada = document.querySelector('#doseProjetada');
const modalguessingGame = document.querySelector('#guessingGame');

const closeButtonsProject = document.querySelectorAll(".button");

const AllButtonProject = [buttonBurning, buttonLavori, buttonSiteDev, buttonSiteComics , buttonGoBus,buttonSitAdvertencia, buttonDoseProjetada, buttonPortoWine,buttonguessingGame ]
const AllmodalProject = [modalBurning, modalLavori,modalSiteDev, modalDCcomics, modalGoBus, modalSistemAdvetemcia, modaldoseProjetada, modalPortWine, modalguessingGame]


AllButtonProject.forEach((button, index) => {
    button.addEventListener('click', () => {
      AllmodalProject[index].showModal();
         
    });
});

closeButtonsProject.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
        Escclose()
        
    });
});

}

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
          Escclose()
          
      });
  });
}



function windowsLocation () {
  if (document.location.pathname === '/about.html') return mostrarTexto();
  if (document.location.pathname === '/training.html') return showModalPageTraning();
  if (document.location.pathname === '/project.html') return showModalPageProject();
  if (document.location.pathname === '/experience.html') return showModalPageExperience();


}

windowsLocation()

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
