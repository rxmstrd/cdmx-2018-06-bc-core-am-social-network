function registrar(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function () {
    verificar()
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });;
}

function ingreso(){
  var email2 = document.getElementById('email2').value;
  var password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2).
  catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("existe usuario activo")
      aparece(user);
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log(user.emailVerified);
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    console.log("no existe usuario activo");
  }
});
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById('contenido');
  if(user.emailVerified){
    contenido.innerHTML =  `
    <p>Bienvenido</p>
    <button onclick="cerrar()">Cerrar sesión</button>`;
  }

}

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
  console.log("Saliendo ....");
})
  .catch(function(error){
    console.log(error)
  })
}

function verificar(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  console.log("Enviando correo");
}).catch(function(error) {
console.log(error);
});
}
