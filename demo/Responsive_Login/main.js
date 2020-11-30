const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
   
}

inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});


//Validaciones

let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let error = document.getElementById('error');
error.style.color= 'red';
error.style.textAlign = 'center';
error.style.fontFamily = "Source Sans Pro";



function enviarFormulario(){
console.log('Enviando formulario...');

var mensajesError = [];

if(usuario.value === null || usuario.value === ''){
    mensajesError.push('Ingresa tu nombre');
}

if(contraseña.value === null || contraseña.value === ''){
    mensajesError.push('Ingresa tu contraseña');
}

error.innerHTML = mensajesError.join(' e ');

return false;


}

