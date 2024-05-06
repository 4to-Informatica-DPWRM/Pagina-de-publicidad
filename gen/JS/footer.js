//#*    [ VARIABLES ] 

const documentofoot = document.documentElement;
const documentostylefoot = window.getComputedStyle(documentofoot);

const footercode = `<footer>

<img src="/assets/img/valores.webp" alt="hola" height="100" width="200" id="logofooter">

<div id="redes">
    <h2>Redes sociales</h2>
    
    <div id="imgredes">
        <a target="_blank" href="https://facebook.com"><img src="/assets/img/Logos/Facebook Logo2.png" alt="Facebook"></a>
        <a target="_blank" href="https://twitter.com"><img src="/assets/img/Logos/Twitter Logo.png" alt="Twitter"></a>
        <a target="_blank" href="https://instagram.com"><img src="/assets/img/Logos/Instagram Logo.png" alt="Instagram"></a>
        <a target="_blank" href="https://linkedin.com"><img src="/assets/img/Logos/Linkedin Logo2.png" alt="Linkedin"></a>
    </div>
</div>

<div id="Nosotros">
    <h2>Nosotros</h2>

    <div id="ubicacion">
        <a href="https://www.google.com/maps/place/Centro+Olimpico,+Santo+Domingo/@18.4774197,-69.9171459,16z/data=!3m1!4b1!4m6!3m5!1s0x8eaf89cf17e1064b:0x4f09505d4f0f03bd!8m2!3d18.4782775!4d-69.9168164!16s%2Fg%2F11fpk4_ts6?entry=ttu"><p>Ubicación</p></a>
        <a href="/HTML/Nosotros.html"><p>Nosotros</p></a>
        <p>Tel: 829-966-3758</p>
    </div>
</div>

<div id="Extra">
    <h2>Extra</h2>

    <div id="extratext">
        <p>Texto de decoracion</p>
        <p>Texto de decoracion</p>
        <p>Texto de decoracion</p>
        <p>Texto de decoracion</p>
    </div>
</div>
</footer>`

documentofoot.innerHTML += footercode;