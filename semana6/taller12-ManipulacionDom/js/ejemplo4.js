let contador = 0;
let boton = document.getElementById('miBoton');
let parrafo = document.getElementById('contador');
boton.addEventListener('click', function () {
    contador++;
    parrafo.textContent = 'Clics: ' + contador;
});