//#*    [ FUNCIONES DE OBJETOS ]

function mostraruocultar(objeto) {
        
    if (objeto.style.display == 'none') {
        objeto.style.display = 'block';
    }
    else {
        objeto.style.display = 'none';
    };
};