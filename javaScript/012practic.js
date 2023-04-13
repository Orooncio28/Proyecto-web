/* ampliar el 011practica para mas animalesen la granja*/

function alcocharConCeros(numero, amplitud) {
    let string = String(numero);
    while (string.length < amplitud) {
    string = "0" + string;
    }
    return string;
    }
function imprimirInventarioGranja(vacas, pollos, cerdos,perros, gatos, patos) {
    console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
    console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
    console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
    console.log(`${alcocharConCeros(perros, 3)} Perros`);
    console.log(`${alcocharConCeros(gatos, 3)} Gatos`);
    console.log(`${alcocharConCeros(patos, 3)} Patos`);
    }
    imprimirInventarioGranja(8,25,40,3,2,16);