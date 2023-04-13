/*
funcion para crear un tablero de ajederez
function ajedrez(){
    var textoPar = "";
    var textoImpar = "";
    while(textoPar.length < 8){
      if(textoPar.length % 2 === 0){
        textoPar += "#";
        textoImpar += " ";
      } 
       if(textoPar.length % 2 === 1){
        textoPar += " ";
        textoImpar += "#";
      } 
    }
    for(var i = 0; i<8; i++){
      if(i % 2 === 0) console.log(textoPar + "\n" );
      if(i % 2 === 1) console.log(textoImpar + "\n" );
  }
}
  ajedrez();
  
*/

 // crea un tablero de ajederez de tama;o definido por el usuario
function ajedrez(tamano){
  var textoPar = "";
  var textoImpar = "";
  while(textoPar.length < tamano){
    if(textoPar.length % 2 === 0){
      textoPar += "#";
      textoImpar += " ";
    } 
    else if(textoPar.length % 2 === 1){
      textoPar += " ";
      textoImpar += "#";
    } 
  }
  for(var i = 0; i < tamano; i++){
    if(i % 2 === 0) console.log(textoPar + "\n");
    if(i % 2 === 1) console.log(textoImpar + "\n");
  }
}

ajedrez(16);
