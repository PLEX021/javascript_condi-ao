const readlineSync = require('readline-sync');
const numeroUm =  Number(readlineSync.question ("Qual e o numero um?"));
const numeroDois =  Number(readlineSync.question ("Qual e o numero dois?"));
const numeroTres =  Number(readlineSync.question ("Qual e o numero tres?"));

calculo=numeroUm + numeroDois 
               

if(numeroTres != calculo){
    console.log("O valor do numero um e do numero dois nao e o mesmo :",calculo);
}else if(calculo == numeroTres){
    console.log("a soma do valor numero um e do numero dois vai ser o numero tres")
}
else{
    console.log("erro");
}











/*4. Escreva um algoritmo que leia três números fornecidos pelo usuário e mostre se 
a soma de dois deles resulta no terceiro.*/