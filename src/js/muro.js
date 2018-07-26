firebase.initializeApp({
  apiKey: "AIzaSyBONnPcYzSFo2OejnVb0-V9yuGW0shURWg",
  authDomain: "redsocial-3d9dd.firebaseapp.com",
  projectId: "redsocial-3d9dd",
});

// Inicializa Cloud Firestore through Firebase
const db = firebase.firestore();

function publicar() {
  let mensaje = document.getElementById("mensaje").value;

  if ( mensaje !== "" ) {
    db.collection("users").add({
      mensaje: mensaje,
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("mensaje").value = "";
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  } else {
    alert('ingresa tu mensaje')
  }
}

let publicacion = document.getElementById("publicacion");
db.collection("users").onSnapshot((querySnapshot) => {
  publicacion.innerHTML= "";
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().mensaje}`);
      //para usuario va <th scope="row">${doc.id}</th>
      //probar iinsertAdjacentHTML(beforebegin, texto) para que ordene pùblicaciones
      publicacion.innerHTML += `
      <article class="post">
          <h4>${doc.id}</h4>
          <p>${doc.data().mensaje}</p>
          <a class="post-eliminar" onclick="eliminar('${doc.id}')">Eliminar</a>
          <a class="post-editar" onclick="editar('${doc.id}','${doc.data().mensaje}')">Editar</a>
      </article>
      `
  });
});

//Borrar datos
function eliminar(id) {
  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

}

//Editar documentos
function editar(id,mensaje) {
  document.getElementById("mensaje").value = mensaje;
  let boton = document.getElementById('boton');
  boton.innerHTML = "Editar";
  boton.onclick = function (){
    const washingtonRef = db.collection("users").doc(id);
    let mensaje = document.getElementById('mensaje').value;

    return washingtonRef.update({
      mensaje: mensaje,
    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML = "Guardar";
        document.getElementById("mensaje").value = "";
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

  }

  }
