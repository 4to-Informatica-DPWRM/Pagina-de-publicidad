//#*    [ VARIABLES ]

const documentocines = document.documentElement;
const documentostylecines = window.getComputedStyle(documentocines);
const divisionesdepeliculas = document.querySelectorAll('.typepel');
var precpel = [150, 200, 250, 300]
var cinesrd = ["Caribbean Cinemas", "Palacio del Cine", "Fine Arts Cinema Cafe", "The Colonial Gate"]

for (i = 0; i < divisionesdepeliculas.length; i++) {

    let actobject = divisionesdepeliculas.item(i)
    let numran = Math.floor(Math.random() * (precpel.length - 1 + 1) + 0)
    let numrancines = Math.floor(Math.random() * (cinesrd.length - 1 + 1) + 0)

    actobject.innerHTML += `
    <div class="pelinfo">
        <p><span class="spantitle">En:</span> ${cinesrd[numrancines]}</p>
        <p><span class="spantitle">Precios de boletas:</span> <span class="greencolor">$${precpel[numran]}</span></p>
    </div>`
}