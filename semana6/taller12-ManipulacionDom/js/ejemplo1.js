let boton = document.getElementById('miBoton');
let parrafo = document.getElementById('miParrafo');
boton.addEventListener('click', function () {
    parrafo.textContent = '¡El texto ha sido cambiado!';
});