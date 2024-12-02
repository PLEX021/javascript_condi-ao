const readlineSync = require('readline-sync');
const primeiroNumero = Number(readlineSync.question ("Qual e o valor do primeiro numero ?"));
const segundoNumero = Number(readlineSync.question ("Qual e o valor do segundo numero ?"));

 if(primeiroNumero == segundoNumero){
    console.log("o perimeiro e igual a o segundo numero");
 }
else if(primeiroNumero < segundoNumero){
    console.log("O primeiro numero não e menor que o segundo");
}
 if(segundoNumero > primeiroNumero){
    console.log("O segundo numero e maior que primero numero");
}
else{
    console.log("erro");
}















/*2. Escreva um algoritmo que leia dois números fornecidos pelo usuário e, conforme
o valor deles, exiba uma das seguintes mensagens: “O primeiro número informado
é o maior”, “O segundo número é o maior” ou “Ambos os números são iguais”.*/ 