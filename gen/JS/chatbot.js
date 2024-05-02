//#*    [ VARIABLES ]

//_*    [ CONST ]

const documentobot = window.getComputedStyle(document.documentElement)
const documentel = document.documentElement

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

function tryplaysound(audio) {

    try {
        audio.play()
    }
    catch (error) {
        console.log('No tiene sonido', error)
    }
}

function mostraruocultar(objeto, sound, elsesound) {
        
    if (objeto.style.display == 'block') {
        objeto.style.display = 'none';
        tryplaysound(sound)
    }
    else {
        objeto.style.display = 'block';
        tryplaysound(elsesound)
    };
};

document.addEventListener('DOMContentLoaded', function() {

    const cargarbot = `<section id="chatbot">
    <div id="chat">
        
    </div>

    <article class="chatbot" id="cuerpo">
        <div class="text">
        
            <div id="agregar">
        
            </div>
        
        </div>
        
        <div id="botones">
            <button type="button" id="1" class="botones">HOLA</button>
            <button type="button" id="3" class="botones">COMO ESTAS</button>
            <button type="button" id="4" class="botones">OSTIA</button>
            <button type="button" id="2" class="botones">ADIOS</button>
            <button type="button" id="5" onclick="clearElements()" class="clear">CLEAR</button>
        </div>
        
        <div class="send-cont">
            <div class="btn-container">
                <button class="send-button" id="send">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
            <input maxlength="50" type="text" id="insertartexto"></input>
        </div>
        
    </article>
</section>

<audio src="/assets/sounds/snd_sparkle1.wav" type="audio/wav" id="sparkles"></audio>
<audio src="/assets/sounds/snd_splash.wav" type="audio/wav" id="splash"></audio>`

    var Elemento = document.querySelector('#chatbot');

    if (Elemento) {

        //? Crea un contenedor temporal, añade el menú y luego lo inserta antes del elemento de referencia
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = cargarbot;

        while (tempDiv.firstChild) {
            Elemento.parentNode.insertBefore(tempDiv.firstChild, Elemento);
        }
    }
    else {
        //? Si no hay un elemento existente lo añade al inicio
        document.body.insertAdjacentHTML('afterbegin', cargarbot);
    }

    const adt = document.getElementById('insertartexto')
    const enviar = document.getElementById('send')
    const actualPos = documentobot.getPropertyValue('--actualPos')
    const antPos = documentobot.getPropertyValue('--antPos')
    const prueba = document.getElementById('agregar')
    const menres = document.getElementById('mensajesfaltantes')
    const openchat = document.querySelector('#chat');
    const chatwithbot = document.getElementsByClassName('chatbot')[0];
    const chatbotbuttons = document.querySelectorAll('.botones');
    const sparklessounds = document.querySelector('#sparkles');
    const splashsounds = document.querySelector('#splash');

    var respuesta = user + texto + finuser

    prueba.innerHTML += bot + 'Bienvenido, en que puedo ayudarte?' + finbot

    //#*    [ FUNCIONES ]   */

    //_*    [ EDICION DE TEXTO ]

    function toCapitalize(texto) {
        return texto[0].toUpperCase() + texto.slice(1).toLowerCase()
    }

    //_*    [ NUMEROS ]

    function RandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function entre(num, max, min) {
        return (num <= max) & (num >= min)
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
                numran = RandomInt(holaswitch.length-1, 0)
                prueba.innerHTML += holaswitch[numran]
                break;
            case 2: 
                numran = RandomInt(adiosswitch.length-1, 0)
                prueba.innerHTML += adiosswitch[numran]
                break;
            case 3:
                numran = RandomInt(adiosswitch.length-1, 0)
                prueba.innerHTML += hruswitch[numran]
                break;
            case 4: 
                prueba.innerHTML += ostia

                break;
            default: 
                if (texto.length == 0) {
                    prueba.innerHTML += elseswitch[10]
                }
                else {
                    numran = RandomInt(adiosswitch.length-1, 0)
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
        
        mensajestot = 0;
        lock = false;
        while (prueba.firstChild) {
            prueba.removeChild(prueba.firstChild);
        };

        if (mensajestot == 0) {
            adt.value = '';
        };
    };

    function ponermensaje() {
        hola();
        detectarmensajes();
    };

    //#*    [ EVENTOS ] */

    adt.addEventListener('keyup', (event) => {
        
        let valortecla = event['key']

        if (valortecla == 'Enter') {
            ponermensaje();
        };
    })

    enviar.addEventListener('click', function() {
        ponermensaje();
    });

    openchat.addEventListener('click', function() {

        mostraruocultar(chatwithbot, splashsounds, sparklessounds);
    });

    for (var i = 0; i < chatbotbuttons; i++) {

        let object = chatbotbuttons.item(i)

        object.addEventListener('click', function() {
            hola()
        })
    }

    openchat.addEventListener('mouseover', function() {
        document.querySelector('#selectmenu').play()
    })

})