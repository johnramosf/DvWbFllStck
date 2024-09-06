window.addEventListener('load', hello());
function hello() {
    inicializar();
    agregarLista();
}


function inicializar() {
    divForm = document.getElementsByClassName('dos')[0];
    let inNombre = document.getElementById('name');
    let inApellido = document.getElementById('lastname');
    let inDireccion = document.getElementById('adress');
    let inTelefono = document.getElementById('telephone');
    let inCorreo = document.getElementById('email');
    let verBotonM = document.getElementById('mostrar');
    let verBotonO = document.getElementById('ocultar');
    inNombre.value = " ";
    inApellido.value = " ";
    inDireccion.value = " ";
    inTelefono.value = 0;
    inCorreo.value = " ";
    divForm.style.visibility="hidden";
    verBotonO.style.visibility = "hidden";
    verBotonM.style.visibility = "visible";
}

function agregarLista() {
    let lista = document.createElement('ul');
    let div_uno = document.querySelector('div.uno');

    let listaDos = document.createElement('ol');
    let listelemDos = document.createElement('li');
    listelemDos.textContent = 'Levantarse';
    listaDos.appendChild(listelemDos);
    listelemDos = document.createElement('li');
    listelemDos.textContent = 'Ir al baño';
    listaDos.appendChild(listelemDos);
    listelemDos = document.createElement('li');
    listelemDos.textContent = 'Tender la cama';
    listaDos.appendChild(listelemDos);
    listelemDos = document.createElement('li');
    listelemDos.textContent = 'Bañarse';
    listaDos.appendChild(listelemDos);
    listelemDos = document.createElement('li');
    listelemDos.textContent = 'Vestirse';
    listaDos.appendChild(listelemDos);
    listelemDos = document.createElement('li');
    listelemDos.textContent = 'Desayunar';
    listaDos.appendChild(listelemDos);
    div_uno.appendChild(listaDos);
}

function validar() {
    console.log("validating Form");
    let inputs = document.getElementsByTagName('input');
    let valid = true;
    let campo;
    for(let i=0; i<inputs.length; i++) {
        campo = inputs[i].value;
        console.log(` valor fila ${i}|:| ${campo}|`);
        if (campo == "" || campo == " "  || campo == null || campo == undefined ) {
            valid = false;
            break;
        }  
    } 
    if (!valid) alert('Formulario no valido, intente de nuevo');
        else alert('Formulario Válido');
}

function mostrar(){
    let divForm = document.getElementsByClassName('dos')[0];
    let verBotonM = document.getElementById('mostrar');
    let verBotonO = document.getElementById('ocultar');        
    console.log(`visibilidad: ${divForm.style.visibility}`)    
       console.log('invisible -> visible');
       divForm.style.visibility = "visible";  
       verBotonO.style.visibility = "visible";
       verBotonM.style.visibility = "hidden";
}

function ocultar(){
    let divForm = document.getElementsByClassName('dos')[0];
    let verBotonM = document.getElementById('mostrar');
    let verBotonO = document.getElementById('ocultar');        
    console.log(`visibilidad: ${divForm.style.visibility}`)    
       console.log('visible -> invisible');
       divForm.style.visibility = "hidden";  
       verBotonO.style.visibility = "hidden";
       verBotonM.style.visibility = "visible";
}

function mouseOnFormBackgr(){
    let formul=document.getElementsByClassName('formul')[0];
   formul.style='background:linear-gradient(to left, #f5a432, #66dd11);color:rgb(0,0,0)';
   console.log(formul.style.background);
}
function mouseOffFormBackgr(){
   let formul=document.getElementsByClassName('formul')[0];
   formul.style='background:linear-gradient(to right, #d432f5, #116ddd);rgb(169, 236, 230);';
}