const readlineSync = require('readline-sync');

const massa= Number(readlineSync.question ("Qual foi o peso da massa de newtons?"));


newtons = massa * 9.8;

if(massa >= 1000){
console.log("O objeto foi muito pesado e o peso foi:",newtons)
}
else if(massa <= 10){
    console.log("O objeto foi muito  e o leve so foi:",newtons)
}
else{
    console.log("erro");
}