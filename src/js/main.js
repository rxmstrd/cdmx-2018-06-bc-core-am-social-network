const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const btnRegistrar = document.getElementById('registrar').value;
const email2 = document.getElementById('email2').value;
const password2 = document.getElementById('password2').value;
const btnIngreso = document.getElementById('ingreso').value;
const contenido = document.getElementById('contenido').value;

btnRegistrar.addEventListener("click", event =>{
window.social.registrar(email.value,password.value);
}
);

btnIngreso.addEventListener("click", event =>{
window.social.registrar(email2.value,password2.value);
}
);
