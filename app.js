// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.

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

for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li"); // aquí debe ser "li" 
    li.textContent = amigos[i];            // el nombre en la posición i
    lista.appendChild(li);                 // agregamos <li> al <ul>
  }
}


function sortearAmigo() {

if ( amigos.length === 0){
  alert ("No hay amigos en la lista para sortear 😅");
  return;
}

let ramdomAmigo = Math.floor(Math.random() *amigos.length);
let amigoSorteado = amigos[ramdomAmigo];

 let resultado = document.getElementById("resultado");
resultado.innerHTML = `🎉 Tu amigo secreto es: ${amigoSorteado}`
}


function limpiarCampos(){
    document.getElementById("amigo").value = "";

}
