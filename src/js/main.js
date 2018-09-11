const email = document.getElementById('email');
const password = document.getElementById('password');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

const btnIngreso = document.getElementById('ingreso');
const btnRegistrar = document.getElementById('registrar');
const btnGoogle = document.getElementById('btn-google');

const contenido = document.getElementById('contenido');


btnRegistrar.addEventListener("click", event =>{
  window.social.registrar(email.value,password.value);
    //window.social.observador();
    document.querySelector('.modal-registro').classList.add('active');
    document.querySelector('.loginGeneral').style.display = 'none';
  }
);

btnIngreso.addEventListener("click", event =>{
  window.social.ingreso(email2.value,password2.value);
  //window.social.observador();
  }
);

btnGoogle.addEventListener("click", event => {
  window.social.googleSignIn();
  //window.social.observador();
  }
);


// const cerrarRegistro = () => {
//   document.querySelector('.modal-registro').style.display = 'none';
//   document.querySelector('.loginGeneral').style.display = 'inline-block';
// }