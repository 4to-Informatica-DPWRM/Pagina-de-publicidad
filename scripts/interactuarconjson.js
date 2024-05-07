//? Este código es solo para aprender a usar archivos json, que es el que se llama "jsonausar.json"

document.querySelector('#botondeprueba').addEventListener('click', traerDatos());

function traerDatos() {
    console.log('funciona la funcion')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'scripts/jsonausar.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)

            let datos = JSON.parse(this.responseText)
            console.log(datos)
        }
    }
}