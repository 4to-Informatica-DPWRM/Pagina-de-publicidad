//#*    [ VARIABLES ]

const documentoindex = document.documentElement;
const documentostyleindex = window.getComputedStyle(documentoindex);
const completeundyne = document.getElementById('completeundyne');
const completemettaton = document.getElementById('completemettaton');
const dialogstext = document.querySelectorAll('.dialog');

function mostraruocultar(objeto) {
        
    if (objeto.style.display == 'none') {
        objeto.style.display = 'block';
    }
    else {
        objeto.style.display = 'none';
    };
};

completeundyne.addEventListener('mouseover', function() {
    mostraruocultar(dialogstext[0])
})

completeundyne.addEventListener('mouseout', function() {
    mostraruocultar(dialogstext[0])
})

completemettaton.addEventListener('mouseover', function() {
    mostraruocultar(dialogstext[1])
})

completemettaton.addEventListener('mouseout', function() {
    mostraruocultar(dialogstext[1])
})