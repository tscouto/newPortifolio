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
           
            
        });
    });
  }

  showModalPageTraning()