
 //declaramos el array y le asignamos los valores
 var posiciones = ["Jesús", "Laura", "Nahuel", "Mónica", "Maria", "Leandro", "Susana "];

 //imprimimos cada uno de los valores del array (comienza por cero!)
 document.write("Lista de alumnos" + "<br>"); 
 document.write("1. " + posiciones[0] + "<br>");
 document.write("2. " + posiciones[1] + "<br>");
 document.write("3. " + posiciones[2] + "<br>");
 document.write("4. " + posiciones[3] + "<br>");
 document.write("5. " + posiciones[4] + "<br>");
 document.write("6. " + posiciones[5] + "<br>");
 document.write("7. " + posiciones[6] + "<br>");



let elementoEliminado = posiciones.splice(5, 1) //Se elimina a Leandro
posiciones.splice(1,1 ,"Roberto","Claudia")// Se agregan Roberto y Claudia entre jesus y laura
posiciones.splice(3, 1, 'Monica');// Se intercambia de lugar Nahuel y Monica
posiciones.splice(4, 1, 'Nahuel');

document.write("<br>")
document.write ("Lista actualizada "+ "<br>")

document.write("1. " + posiciones[0] + "<br>");
document.write("2. " + posiciones[1] + "<br>");
document.write("3. " + posiciones[2] + "<br>");
document.write("4. " + posiciones[3] + "<br>");
document.write("5. " + posiciones[4] + "<br>");
document.write("6. " + posiciones[5] + "<br>");
document.write("7. " + posiciones[6] + "<br>");

