//#*    [ VARIABLES ]

const documentoindex = document.documentElement;
const documentostyleindex = window.getComputedStyle(documentoindex);

function mostraruocultar(objeto) {
        
    if (objeto.style.display == 'none') {
        objeto.style.display = 'block';
    }
    else {
        objeto.style.display = 'none';
    };
};