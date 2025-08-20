// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Funcion de lista 
//El array es indexado a un número empezando desde el 0 
//Yo necesito que cuando le des al botón se guarde el nombre en la lista 

let amigos = [];



function agregarAmigo() {
 let nombre = document.getElementById("amigo").value;
if(nombre){
  amigos.push(nombre);
  console.log(amigos);
  console.log(nombre);
}  else {
    alert("Por favor ingresa un nombre válido");
  }

mostrarListaAmigos();
limpiarCampos();
}

function mostrarListaAmigos() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array amigos con forEach
  amigos.forEach(function (elemento, indice) {
    console.log(elemento, indice);

    let li = document.createElement("li"); // Crear un <li> nuevo
    li.textContent = elemento;             // Poner el nombre dentro del <li>
    lista.appendChild(li);                 // Agregar el <li> al <ul>
  });
}


function sortearAmigo() {
  alert("¡Botón de sortear amigo funciona!");


}


function limpiarCampos(){
    document.getElementById("amigo").value = "";

}
