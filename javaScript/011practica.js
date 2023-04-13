/*Queremos escribir un programa que imprima dos números, los números de
vacas y pollos en una granja, con las palabras Vacas y Pollos después de ellos, y
ceros acolchados antes de ambos números para que siempre tengan tres dígitos
de largo.*/

function imprimirInventarioGranja(vacas, pollos) {
    let stringVaca = String(vacas);
    while (stringVaca.length < 3) {
    stringVaca = "0" + stringVaca;
    }
    console.log(`${stringVaca} Vacas`);
    let stringPollos = String(pollos);
    while (stringPollos.length < 3) {
    stringPollos = "0" + stringPollos;
    }
    console.log(`${stringPollos} Pollos`);
    }
    imprimirInventarioGranja(11,7);
