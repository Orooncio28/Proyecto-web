/*Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.*/

let espacio1 = " ", almuadilla = "#", tablero = ["",""];
for(let fila = 1; fila <= 8; fila ++) { 
    
    for(let columna =1; columna <=8; columna ++){
        if(columna % 2 == 0){
            tablero.push =[almuadilla];
        }else(tablero.push[espacio1])    
    }
   console.log(tablero)
   tablero = ["",""] 
    }

    

