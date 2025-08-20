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

mostrarlistaAmigos();
limpiarCampos();
}
/*
function mostrarAlertaVacio() {
if (nombre != ""){
 alert("Ingresa un nombre correctamente");
}
}
*/

function mostrarlistaAmigos(agregarAmigo){
    let lista = document.getElementById("listaAmigos");

amigos.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Manzana 0
// Banana 1


}

function sortearAmigo() {
  alert("¡Botón de sortear amigo funciona!");


}


function limpiarCampos(){
    document.getElementById("amigo").value = "";

}
