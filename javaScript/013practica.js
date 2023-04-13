/*Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva esPar que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero, positivo) y devolver
un Booleano.*/

function esPar(numero){
   while (numero >= 0){
    if(numero == 0){
        return true;
    }else if( numero % 2 == 0){
        return true;
    }return false;
   }
}

console.log(esPar(50));
console.log(esPar(75));
// no esta definido para numeros negativos
console.log(esPar(-1));
