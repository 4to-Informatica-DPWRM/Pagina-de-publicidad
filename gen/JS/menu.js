//#*    [ VARIABLES ]

const documento = document.documentElement;
const documentostyle = window.getComputedStyle(documento);
var numran

document.addEventListener('DOMContentLoaded', function() {

    //#region MENU
    const menu = `<header>

        <a href="/index.html">
            <div id="logoempress">
                <img src="/assets/img/valores.webp" alt="Logo" class="logo">
                <h1>Dominican Offers</h1>
            </div>
        </a>

        <button id="actmenu">Menu</button>
        <div id="menu">

            <a href="/index.html"><p class="menuopts" id="1m">Inicio</p></a>

            <div class="seccion">
                <a href="/HTML/Supermerc.html"><p class="menuopts" id="2m">Supermercados</p></a>
                <div id="optsuper" class="opciones">
                    <p>Aprezio</p>
                    <p>Bravo</p>
                    <p>Sirena</p>
                    <p>Supermix</p>
                    <p>Super mercado nacional</p>
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
            <a target="_blank" href="/HTML/Cines.html"><p class="menuopts" id="5m">Cine</p></a>
            <a target="_blank" href="/HTML/ofertas.html"><p class="menuopts" id="6m">Ofertas</p></a>
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
    const h1menu = document.querySelector('header h1');

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

    h1menu.addEventListener('mouseover', function() {
        soundselect()
    })
})