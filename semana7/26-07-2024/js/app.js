let usuarios = [];
const form = document.getElementById('registroform');
let tabla = document.getElementById('usuariosTabla').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombres = document.getElementById('nombres').value;
    console.log('nombres: ' + nombres);

    const apellidos = document.getElementById('apellidos').value;
    console.log('apellidos: ' + apellidos);

    const correo = document.getElementById('correo').value;
    console.log('correo: ' + correo);

    const contrasena = document.getElementById('contrasena').value;
    console.log('contrasena: ' + contrasena);

    const usuario = { nombres, apellidos, correo, contrasena };
    console.log('lucifer: eres tu ?' + usuario);
    usuarios.push(usuario);
    form.reset();
    actualizarTabla();
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    console.log('(1)'+document.getElementById('loginCorreo').value);
    const correo = document.getElementById('loginCorreo').value;
    console.log('(2)'+document.getElementById('loginContrasena').value);
    const contrasena = document.getElementById('loginContrasena').value;

    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);
    if (usuario) {
        alert(`Bienvenido, ${usuario.nombres} ${usuario.apellidos}! `);
    } else {
        alert("Usuario no encontrado, por favor verifique");
    }
    loginForm.reset()
});

function actualizarTabla() {
    tabla = document.getElementById('usuariosTabla').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = usuario.nombres;
        fila.insertCell().textContent = usuario.apellidos;
        fila.insertCell().textContent = usuario.correo;
        fila.insertCell().textContent = usuario.contrasena;

        const celdaAcciones = fila.insertCell();
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.onclick = () => editarUsuario(index);
        celdaAcciones.appendChild(botonEditar);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarUsuario(index);
        celdaAcciones.appendChild(botonEliminar);
    });
}

function editarUsuario(index) {
    const usuario = usuarios[index];
    document.getElementById('nombres').value = usuario.nombres;
    document.getElementById('apellidos').value = usuario.apellidos;
    document.getElementById('correo').value = usuario.correo;
    document.getElementById('contrasena').value = usuario.contrasena;
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    actualizarTabla();
}
