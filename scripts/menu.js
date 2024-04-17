//#*    [ VARIABLES ]

const documento = document.documentElement;
const documentostyle = window.getComputedStyle(document.documentElement);
const menu = `<header>

<img src="/assets/img/valores.webp" alt="Logo" class="logo">

<div id="menu">
    <p class="menuopts" id="1">Inicio</p>
    <p class="menuopts" id="2">Supermercado</p>
    <p class="menuopts" id="3">Farmacia</p>
    <p class="menuopts" id="4">Loteria</p>
    <p class="menuopts" id="5">Cine</p>
    <p class="menuopts" id="6">Mercancia</p>
    <p class="menuopts" id="7">Nosotros</p>

    <div id="optinicio" class="opciones">
        <p>Mision</p>
        <p>Vision</p>
        <p>Valores</p>
    </div>

    <div id="optsuper" class="opciones">
        <p>Aprecio</p>
        <p>Bravo</p>
        <p>Sirena</p>
        <p>Supermix</p>
        <p>Super mercado nacional</p>
    </div>

    <div id="optfarm" class="opciones">
        <p>Los Hidalgos</p>
        <p>Farmacia Carolx</p>
        <p>Farmacia GBC</p>
        <p>Farmanax</p>
    </div>
</div>

</header>`;

documento.innerHTML += menu;

var objectid
const menuhead = document.querySelectorAll('.menuopts');
const iniciooptions = document.getElementById('optinicio');
const opciones = document.querySelectorAll('.opciones');

for (i = 0; i <= menuhead.length-1; i++) {
    let object = menuhead.item(i);
    let objectopt = opciones.item(i);

    object.addEventListener('mouseover', function() {
        objectid = Number(event.target.id)
        mostrar_ocultar()
    });

    object.addEventListener('mouseout', function() {
        mostrar_ocultar()
    })

    objectopt.addEventListener('mouseover', function() {
        mostrar_ocultar()
    })

    objectopt.addEventListener('mouseout', function() {
        mostrar_ocultar()
    })
};

function mostrar_ocultar() {
    if (opciones[objectid-1].style.display == "none") {
        opciones[objectid-1].style.display = "block";
    }
    else {
        opciones[objectid-1].style.display = "none";
    }
}