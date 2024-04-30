//#*    [ VARIABLES ]

//_*    [ CONST ]

const documentobot = window.getComputedStyle(document.documentElement)
const documentel = document.documentElement
const adt = document.getElementById('insertartexto')
const enviar = document.getElementById('send')
const actualPos = documentobot.getPropertyValue('--actualPos')
const antPos = documentobot.getPropertyValue('--antPos')
const prueba = document.getElementById('agregar')
const menres = document.getElementById('mensajesfaltantes')

//_*    [ VAR ]

var mensajeanterior = 'none'
var mensajestot = 0
var username //= prompt("Ingrese su usuario:")
var numran
var texto
var textosi
var textboton
var ext
var lock = false

if (!username) {
    username = ''
}

if (username.length == 0) {
    username = 'Usuario'
}

if (username.length > 35) {
    username = username.substring(0, 35)
}

//#*    [ MENSAJES ]    */

const bot = `<div class="bot-response animation"><span class="bot-name">Mettaton</span><p class='agregado'><i class="fa-solid fa-robot icon"></i>></i>`
const finbot =  `</p></div>`
const user = `<div class="user-response animation"><span class="username">${username}</span><p class='agregado'>`
const finuser = ` < <i class="fa-regular fa-circle-user user-icon"></i></p></div>`

const holaswitch = [
    bot + 'Hola' + finbot,
    bot + "Holi" + finbot,
    bot + 'Hola, como te va?' + finbot,
    bot + 'Hola, estas bien?' + finbot,
    bot + 'ola' + finbot,
    bot + 'Hola~~' + finbot
]

const adiosswitch = [
    bot + 'Adios' + finbot,
    bot + 'Bye' + finbot,
    bot + 'Adios, espero y vuelvas' + finbot,
    bot + 'Adios, recuerda volver!' + finbot,
    bot + 'Adios, vuelve pronto' + finbot
]

const hruswitch = [
    bot + 'Tranqui bro' + finbot,
    bot + 'Bien' + finbot,
    bot + 'Mal' + finbot,
    bot + 'Activando sistema operativo' + finbot,
    bot + 'Sentado' + finbot,
    bot + 'De pie' + finbot,
    bot + 'Volando' + finbot,
    bot + 'Bien, y tu?' + finbot
]

const ostia = bot + 'Vua chaval, que epico' + finbot

const elseswitch = [
    bot + 'No tengo respuesta para esta consulta. :(' + finbot,
    bot + 'No he entendido tu pregunta, puedes escribirla de una mejor manera?' + finbot, 
    bot + 'Vuelve a escribir tu pregunta, porfavor.' + finbot,
    bot + 'que?' + finbot,
    bot + 'No tengo respuestas para lo que acabas de decir.' + finbot,
    bot + 'No se si sea error mio, pero vuelve a escribir tu mensaje' + finbot,
    bot + 'Escribe un mensaje que pueda interpretar.' + finbot,
    bot + 'A que te refieres?' + finbot,
    bot + 'No entiendo a lo que te refieres.' + finbot,
    bot + 'No entendi a lo que te referias.' + finbot
]

var respuesta = user + texto + finuser

prueba.innerHTML += bot + 'Bienvenido, en que puedo ayudarte?' + finbot

//#*    [ FUNCIONES ]   */

//_*    [ EDICION DE TEXTO ]

function toCapitalize(texto) {
    return texto[0].toUpperCase() + texto.slice(1).toLowerCase()
}

//_*    [ MENSAJES ]

function holareal(objid) {

    if (!(isNaN(objid))) {
        textosi = document.getElementById(objid).textContent
        textosi = toCapitalize(textosi)
    }

    prueba.innerHTML += user + textosi + finuser
    mensajestot++

    switch (objid){
        case 1: 
            numran = Math.floor(Math.random() * (holaswitch.length - 1 + 1) + 1)-1
            prueba.innerHTML += holaswitch[numran]
            break;
        case 2: 
            numran = Math.floor(Math.random() * (adiosswitch.length - 1 + 1) + 1)-1
            prueba.innerHTML += adiosswitch[numran]
            break;
        case 3:
            numran = Math.floor(Math.random() * (hruswitch.length - 1 + 1) + 1)-1
            prueba.innerHTML += hruswitch[numran]
            break;
        case 4: 
            numran = Math.floor(Math.random() * 10000)+1
            console.log(numran)
            if (numran == 6969 || numran == 34 || numran == 6942 || numran == 69 || numran == 6996 || numran == 666 || numran == 42 || numran == 23 || numran == 496 || numran == 1) {
                prueba.innerHTML += bot + 'Me gusta follar perros' + finbot
                console.log('salio!')
                lock = true
            }
            else {
                prueba.innerHTML += ostia
            }

            break;
        default: 
            if (texto.length == 0) {
                prueba.innerHTML += elseswitch[10]
            }
            else {
                numran = Math.floor(Math.random() * (elseswitch.length - 1 + 1) + 1)-1
                prueba.innerHTML += elseswitch[numran]
            }
    }
}

function si() {
    texto = adt.value
    textosi = texto
    texto = texto.toUpperCase()

    if (texto.length > 0) {

        mensajeanterior = textosi

        switch (true) {
            case texto.search('HOLA') >= 0:
                holareal(1)
                break;
            case texto.search('ADIOS') >= 0:
                holareal(2)
                break;
            case texto.search('COMO ESTAS') >= 0:
                holareal(3)
                break;
            case texto.search('OSTIA') >= 0:
                holareal(4)
                break;
            default:
                holareal();
        }
    }
}

function hola() {

    let idboton = event.target.id

    if (isNaN(Number(idboton))) {
        idboton = idboton        
    }
    else {
        idboton = Number(idboton)
    }

    if (lock == false) {
        if (typeof idboton == 'number') {
            holareal(idboton)
            detectarmensajes()
        }
        else {
            si()
        }
    }
}

function detectarmensajes() {

    if (mensajestot == 101) {
        clearElements()
        mensajestot = 0
    }
}

function clearElements() {
    
    mensajestot = 0
    lock = false
    while (prueba.firstChild) {
        prueba.removeChild(prueba.firstChild);
    }

    if (mensajestot == 0) {
        adt.value = ''
    }
}

function ponermensaje() {
    hola()
    detectarmensajes()
}

//#*    [ EVENTOS ] */

adt.addEventListener('keyup', (event) => {
    
    let valortecla = event['key']

    if (valortecla == 'Enter') {
        ponermensaje()
    }
})

enviar.addEventListener('click', function() {
    ponermensaje()
})