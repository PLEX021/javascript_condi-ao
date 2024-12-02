const readlineSync = require('readline-sync');
const lado1= Number(readlineSync.question ("Qual e o valor deste lado?"));
const lado2= Number(readlineSync.question ("Qual e o valor deste lado?"));
const lado3= Number(readlineSync.question ("Qual e o valor deste lado?"));


if(lado1 === lado2 && lado2 === lado3){
    console.log("Esse triangulo e equilatero")
}
else if(lado1 === lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("Esse triangulo e isosceles")
}
else if(lado1 != lado2 && lado2 != lado3){
    console.log("Esse triangulo e  escaleno")
}
else{
    console.log("erro")
}