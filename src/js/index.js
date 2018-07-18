function registrar(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
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
      aparece();
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log(user);
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

function aparece(){
  var contenido = document.getElementById('contenido');
  contenido.innerHTML =  `
  <p>Bienvenido</p>
  <button onclick="cerrar()">Cerrar sesión</button>`;
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
