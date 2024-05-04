// Si deseas añadir un efecto de movimiento a las imágenes, puedes usar JavaScript.
// Por ejemplo, podrías utilizar una librería como jQuery o simplemente modificar las propiedades CSS directamente.

// Aquí hay un ejemplo usando JavaScript puro para mover las imágenes:
const images = document.querySelectorAll('.offer-img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

function verProducto(producto) {
    // Redireccionar a la página del producto con más detalles
    window.location.href = 'producto.html#' + producto;
