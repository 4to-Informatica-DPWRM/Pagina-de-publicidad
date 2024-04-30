//#*    [ VARIABLES ]

const documento = document.documentElement;
const documentostyle = window.getComputedStyle(document.documentElement);

document.addEventListener('DOMContentLoaded', function() {
    const menu = `<header>
        <a href="/index.html"><img src="/assets/img/valores.webp" alt="Logo" class="logo"></a>

        <button id="actmenu">M</button>
        <div id="menu">
            <div class="seccion">
                <a href="/index.html"><p class="menuopts" id="1">Inicio</p></a>
                <div id="optinicio" class="opciones">
                    <p>Misión</p>
                    <p>Visión</p>
                    <a href="/HTML/valores2.html"><p>Valores</p></a>
                </div>
            </div>
            <div class="seccion">
                <a href="/HTML/Supermerc.html"><p class="menuopts" id="2">Supermercados</p></a>
                <div id="optsuper" class="opciones">
                    <p>Aprezio</p>
                    <p>Bravo</p>
                    <p>Sirena</p>
                    <p>Supermix</p>
                    <p>Super mercado nacional</p>
                </div>
            </div>
            <div class="seccion">
                <p class="menuopts" id="3">Farmacias</p>
                <div id="optfarm" class="opciones">
                    <a href="https://farmaciasloshidalgos.com.do"><p>Los Hidalgos</p></a>
                    <a href="https://www.farmaciacarol.com"><p>Farmacia Carol</p></a>
                    <a href="https://farmaciamedicargbc.com/contactenos/?gclid=CjwKCAjwrcKxBhBMEiwAIVF8rJKjNy1VP61rP2eg9DvCThm4AWVbdnGSSwaCU9i2y-tmjY-I6FJooRoCE24QAvD_BwE"><p>Farmacia GBC</p></a>
                    <a href="https://edenorte.com.do/farmax-2/"><p>Farmanax</p></a>
                </div>
            </div>
            <p class="menuopts" id="4">Loteria</p>
            <a href="/HTML/Cines.html"><p class="menuopts" id="5">Cine</p></a>
            <a href="/HTML/ofertas.html"><p class="menuopts" id="6">Mercancia</p></a>
            <p class="menuopts" id="7">Nosotros</p>
        </div>
    </header>`;

    var Elemento = document.querySelector('header');

    if (Elemento) {

        //? Crea un contenedor temporal, añade el menú y luego lo inserta antes del elemento de referencia
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = menu;

        while (tempDiv.firstChild) {
            Elemento.parentNode.insertBefore(tempDiv.firstChild, Elemento);
        }
    }
    else {
        //? Si no hay un elemento existente lo añade al inicio
        document.body.insertAdjacentHTML('afterbegin', menu);
    }

    var objectid
    const allmenu = document.querySelector('#menu');
    const menuhead = document.querySelectorAll('.menuopts');
    const iniciooptions = document.getElementById('optinicio');
    const opciones = document.querySelectorAll('.opciones');
    const botonformenu = document.querySelector('#actmenu');
    const openchat = document.querySelector('#chat');
    const chatwithbot = document.getElementsByClassName('chatbot')[0];
    const warningobj = document.querySelectorAll('.WARNING');

    //#*              [ FUNCIONES ]

    //? Mostrar u Ocultar el objeto insertado en el parametro
    function mostraruocultar(objeto) {
        
        if (objeto.style.display == 'none') {
            objeto.style.display = 'block';
        }
        else {
            objeto.style.display = 'none';
        };
    };

    //#*                [ EVENTOS ]

    //? (REPONSIVE. Muestra el menu completo)
    botonformenu.addEventListener('click', function() {

        mostraruocultar(allmenu);
    })

    //? Añadir eventos a los 3 primeros objetos del menu, junto con sus opciones
    for (i = 0; i <= menuhead.length-5; i++) {

        let object = menuhead.item(i);
        let objectopt = opciones.item(i);

        object.addEventListener('mouseover', function() {
            objectid = Number(event.target.id)

            opciones[objectid-1].style.display = 'block';
        });

        object.addEventListener('mouseout', function() {

            opciones[objectid-1].style.display = 'none';
        });

        //@? Es para evitar que las opciones se cierren cuando muevas el mouse del menu
        objectopt.addEventListener('mouseover', function() {
            
            opciones[objectid-1].style.display = "block";
        });

        objectopt.addEventListener('mouseout', function() {
            opciones[objectid-1].style.display = "none";
        });
    };

    openchat.addEventListener('click', function() {

        mostraruocultar(chatwithbot)
        warningobj[0].style.display = 'none';
    })
})