window.social = {

  registrar: (email,password) => {
    console.log(email,password)

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    window.social.verificar()
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
},// llave registrar

ingreso: (email2,password2) => {
  firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then(function() {
  window.social.observador()
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

},// llave ingreso

googleSignIn: () => {
  provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function(result){
  //  window.social.guardaDatos(result)
   console.log(result)
     location.href ="views/muro.html";
        }).catch(function(err) {
        console.log(err)
        console.log("Failed to do")
      });
}, //llave ingresoGoogle
/*
guardaDatos: (user) => {
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("usuarios/" + user.uid)
  .set(usuario)
},
//Leyendo de la Base de Datos
leerDatos: ()=>{
  firebase.database().ref("usuarios")
  .on("child_added", function(s){
    var user = s.val();
    $('#contenido').append("<img src='"+user.foto+"' />");
  })
},
*/

observador: () => {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("Existe usuario activo")
      window.social.aparece(user);
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
    contenido.innerHTML = ` `;
  }
});
},// llave observador
/* revisar donde mandar a llamar esta funcion observador(); */
aparece: (user) => {
//console.log(user)
  var user = user;
  //console.log(user)
  if(user.emailVerified){
  //  let user = user.uid
  location.href ="views/muro.html";
  /*contenido.innerHTML =  `
    <div class="container mt-5">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Bienvenido! ${user.email}</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
    <button class= "btn btn-danger" onclick="cerrar()">Cerrar sesión</button></div>`;*/
  }
},// llave aparece

cerrar: () => {
  firebase.auth().signOut()
  .then(function(){
  console.log("Saliendo ....");
})
  .catch(function(error){
    console.log(error)
  })
}, // llave cerrar

verificar: ()=> {
  console.log("ingreso a verificar");
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  console.log("Enviando correo");
}).catch(function(error) {
console.log(error);
});
}// llave verificar
}// llave window
