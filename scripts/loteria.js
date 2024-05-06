//#*    [ VARIABLES ]

const documentlot = document.documentElement;
const documentstylelot = window.getComputedStyle(documentlot);
const seclotdivs = document.querySelectorAll('.seclot');
console.log(seclotdivs)

for (i = 0; i < seclotdivs.length; i++) {
    
    let seccionact = seclotdivs.item(i)

    seccionact.innerHTML += `<img src="/assets/img/checkmark.png" alt="Completado"></img>`
}