/* Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string. y se hizo estensivo para que contara el carcter que uno quiera
*/

function cuantasFs(cadena, caracter){
    contador = 0;
    
    for(var i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) contador ++;
    }
      console.log(cadena+" tiene: "+contador+ " " +caracter)
  }
  cuantasFs("En muchas cuidades hay niños que tiene grandes sueños","e" )