const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const suma1 =document.getElementById('suma1');
const suma2 =document.getElementById('suma2');

button.addEventListener('click', (e)=>{

    valorElegido();
   

})

function valorElegido(){
    if(radio1.checked){
        alert('selecciono el boton 1 ');

}else if(radio2.checked){
    alert('selecciono el boton 2 ');
    
}else{
    alert('seleccione una opcion valida')
}

}

button2.addEventListener('click', (e)=>{

    numeroMayor();
   

})

function numeroMayor(){
    if(num1.value > num2.value){
        alert('El numero mayor es  '+ " " + num1.value)

}else if (num2.value > num1.value){
    alert('El numero mayor es  '+ " " + num2.value);

}}





function resultadoSuma(){
   

    alert('La suma es igual a: '+ (parseInt(suma1.value)+ parseInt(suma2.value)))
   
}
