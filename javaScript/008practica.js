//calcula 2 a la potencia 10
const potencia = function(base, exponente) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
    }
    return resultado;
    };
    console.log(potencia(2, 10));