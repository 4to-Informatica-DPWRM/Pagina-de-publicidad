//#*    [ VARIABLES ]

const documentsuper = document.documentElement;
const documentstylesuper = window.getComputedStyle(documentsuper);
const botonescat = document.querySelectorAll('.displaybutton');
const catframes = document.querySelectorAll('iframe');

function mostraruocultar(objeto, boton) {
        
    if (objeto.style.display == 'block') {
        objeto.style.display = 'none';
        boton.src = '/assets/img/Button_Display/DownDisplay.png';
    }
    else {
        objeto.style.display = 'block';
        boton.src = '/assets/img/Button_Display/NoneDisplay2.png';
    };
};

for (i = 0; i < botonescat.length; i++) {

    let actobject = botonescat.item(i)

    actobject.addEventListener('click', function() {
        let actobjectid = Number(String(event.target.id).substring(0, 1)) - 1

        let catel = catframes.item(actobjectid)

        mostraruocultar(catel, actobject)
    })

    console.log('hola')
}