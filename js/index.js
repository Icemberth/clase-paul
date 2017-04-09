'use strict';//obliga a escribir código para ECMAScript 6
var console = console;
var prompt = prompt;
var data = "";//información a recibir en el prompt
var paul = "miguel"; // string
paul = 0; // integer
paul = true; // boolean
paul  = [];//new Array();
//paul = new Array(10); // Si deseo definir un total de posiciones del Array Paul.

function obtenerData(paul, pos) {
  switch (paul[pos]) {
    case "Amigable":
      console.log("Paul es Amigable :)");
    break;
    case "Rencoroso":
      console.log("Paul es Una #@$!a! -.-");
    break;
    default:
      console.log("Probablemente Paul sea ", paul[pos]);
    break;
  }
}

paul = ["Inteligente", "Anciano", "DJ", "Estudiante"]; // Array de Paul - 4 posiciones
console.log("Imprimiendo a Paul", paul); // Imprimiendo por consola a paul

var x = 0; // Genero variable inicial del for en 0
var paulLegth = paul.length; // Obtengo inicialmente el total de posiciones de el array paul, antes de generar el ciclo.

for (x = 0; x < paulLegth; x++) {// Instancio el ciclo de recorrido para el array Paul, y lo aumento de 1 en 1 hasta su máxima posición.
  console.log(paul[x]); // Imprimo posición por posición a el Array Paul.
}
data = prompt("Añadir Atributo a Paul", "");
console.log(data);

if (data === null || data === "") { //No llegaría nada importante, así que no hacemos nada con el Array Paul

} else {
  paul.push(data);
  console.log(paul);
  obtenerData(paul, 4);
}
