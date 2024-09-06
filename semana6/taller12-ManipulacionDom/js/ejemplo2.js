let formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function (event) {
    let nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        event.preventDefault(); // Previene el envío del formulario
    }
});