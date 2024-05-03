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

document.querySelector('#botondeprueba').addEventListener('click', traerDatos());

function traerDatos() {
    console.log('funciona la funcion')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'scripts/prueba.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)

            let datos = JSON.parse(this.responseText)
            console.log(datos)
        }
    }
}