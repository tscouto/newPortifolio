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
            
            
        });
    });
    
    }

    showModalPageProject()