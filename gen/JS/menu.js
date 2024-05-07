//#*    [ VARIABLES ]

const documento = document.documentElement;
const documentostyle = window.getComputedStyle(documento);
const tododocumento = document.querySelector('body');
var fuente = documentostyle.getPropertyValue("--fuente")
var numran
var teclas = []

function resetteclas() {
    let maxteclas = teclas.length

    for (i = 0; i <= maxteclas; i++) {
        teclas.pop(0)
    }
}

window.addEventListener('keydown', function(tecla) {

    teclas.push(tecla["key"])

    if (tecla["key"] == 'r') {
        resetteclas()
    }
    else if (teclas.length % 11 == 0) {
        if ((teclas[0] == 'Enter') & (teclas[1] == 'a') & (teclas[2] == 'b') & (teclas[3] == 'ArrowRight') & (teclas[4] == 'ArrowLeft') & (teclas[5] == 'ArrowRight') & (teclas[6] == 'ArrowLeft') & (teclas[7] == 'ArrowDown') & (teclas[8] == 'ArrowDown') & (teclas[9] == 'ArrowUp') & (teclas[10] == 'ArrowUp')) {
            
            console.log('imanok ogidoc le se iS')

            documento.style.setProperty("--fuente", 'Determination');
            
        }
        else if ((teclas[0] == 'ArrowUp') & (teclas[1] == 'ArrowUp') & (teclas[2] == 'ArrowDown') & (teclas[3] == 'ArrowDown') & (teclas[4] == 'ArrowLeft') & (teclas[5] == 'ArrowRight') & (teclas[6] == 'ArrowLeft') & (teclas[7] == 'ArrowRight') & (teclas[8] == 'b') & (teclas[9] == 'a') & (teclas[10] == 'Enter')) {

            console.log('Si es el codigo konami')

            documento.style.setProperty("--fuente", "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif");
        }
        else {
            console.log('Codigo equivocado')
        }

        resetteclas()
    }
})

document.addEventListener('DOMContentLoaded', function() {

    //#region MENU
    const menu = `<header>

        <a href="/index.html">
            <div id="logoempress">
                <img src="/assets/img/world of Offers2.png" alt="Logo" class="logo">
            </div>
        </a>

        <button id="actmenu">Menu</button>
        <div id="menu">

            <a href="/index.html"><p class="menuopts" id="1m">Inicio</p></a>

            <div class="seccion">
                <a href="/HTML/Supermerc.html"><p class="menuopts" id="2m">Supermercados</p></a>
                <div id="optsuper" class="opciones">
                    <a href="/HTML/Supermerc.html#carrefourcat"><p>Carrefour</p></a>
                    <a href="/HTML/Supermerc.html#bravocat"><p>Bravo</p></a>
                    <a href="/HTML/Supermerc.html#sirenacat"><p>Sirena</p></a>
                    <a href="/HTML/Supermerc.html#supermixcat"><p>Jumbo</p></a>
                    <a href="/HTML/Supermerc.html#supernacional"><p>Super mercado nacional</p></a>
                </div>
            </div>
            <div class="seccion">
                <p class="menuopts" id="3m">Farmacias</p>
                <div id="optfarm" class="opciones">
                    <a target="_blank" href="https://farmaciasloshidalgos.com.do"><p>Los Hidalgos</p></a>
                    <a target="_blank" href="https://www.farmaciacarol.com"><p>Farmacia Carol</p></a>
                    <a target="_blank" href="https://farmaciamedicargbc.com/contactenos/?gclid=CjwKCAjwrcKxBhBMEiwAIVF8rJKjNy1VP61rP2eg9DvCThm4AWVbdnGSSwaCU9i2y-tmjY-I6FJooRoCE24QAvD_BwE"><p>Farmacia GBC</p></a>
                    <a target="_blank" href="https://www.instagram.com/farmamaxve/?hl=es"><p>Farmanax</p></a>
                </div>
            </div>
            <a href="/HTML/Loteria.html"><p class="menuopts" id="4m">Loteria</p></a>
            <a href="/HTML/Cines.html"><p class="menuopts" id="5m">Cine</p></a>
            <a href="/HTML/ofertas.html"><p class="menuopts" id="6m">Ofertas</p></a>
            <a href="/HTML/Nosotros.html"><p class="menuopts" id="7m">Nosotros</p></a>
        </div>
    </header>
    
    <audio id="selectmenu" src="/assets/sounds/snd_select.wav"></audio>`;

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

    //#region VARIABLES

    var objectid
    const allmenu = document.querySelector('#menu');
    const menuhead = document.querySelectorAll('.menuopts');
    const iniciooptions = document.getElementById('optinicio');
    const menuseccion = document.querySelectorAll('.seccion')
    const opciones = document.querySelectorAll('.opciones');
    const opcionesp = document.querySelectorAll('.opciones p');
    const botonformenu = document.querySelector('#actmenu');
    const selectsound = document.querySelector('#selectmenu');
    const pmenus = document.querySelectorAll('header p');

    selectsound.volume = 0.4;

    //#*              [ FUNCIONES ]
    //#region FUNCIONES

    //? Mostrar u Ocultar el objeto insertado en el parametro
    function mostraruocultar(objeto) {
        
        if (objeto.style.display == 'block') {
            objeto.style.display = 'none';
        }
        else {
            objeto.style.display = 'block';
        };
    };

    //#region EVENTOS

    //#*                [ EVENTOS ]

    //? (REPONSIVE. Muestra el menu completo)
    botonformenu.addEventListener('click', function() {

        mostraruocultar(allmenu);
    })

    function soundselect() {
        selectsound.play()
    }

    for (var i = 0; i <= 1; i++) {
        
        let object = menuseccion.item(i)
        let objectid = i

        object.addEventListener('mouseover', function() {

            opciones[objectid].style.display = 'flex';
        })

        object.addEventListener('mouseout', function() {

            opciones[objectid].style.display = 'none';
        })
    }

    for (var i = 0; i <= pmenus.length-1; i++) {

        let object = pmenus.item(i)

        object.addEventListener('mouseover', function() {
            soundselect()
            
        })
    }
})