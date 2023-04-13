/* aqui estamos eatbleciendo las acaiones de Jacques para 
evalauar si se convetrio en arilla ya sociar sus
con la posbilidad de tarnsformacion*/

let diario = [];
function añadirEntrada(eventos, ardilla) {
diario.push({eventos, ardilla});
}

añadirEntrada(["trabajo", "toque un arbol", "pizza", "sali a correr",
"television"], false);
añadirEntrada(["trabajo", "helado", "coliflor", "lasaña",
"toque un arbol", "me cepille los dientes"], false);
añadirEntrada(["fin de semana", "monte la bicicleta", "descanso", "nueces",
"cerveza"], true);

console.log(diario)