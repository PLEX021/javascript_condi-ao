const  readlineSync  = require('process');
const readlineSync = require('readline-sync');
const numeroApolice = Number(readlineSync.question ("Quantos apoles voce possui? "));
const nomeSobreNome = String(readlineSync.question ("Qual e o seu nome e seu sobrenome? "));
const idade = Number(readlineSync.question ("Quantos anos voce tem? "));

const diaVencimento = Number(readlineSync.question ("Qual e o dia do vencimento? "));
const mesVencimento = Number(readlineSync.question ("Qual e o mes do vencimento? "));
const anoVencimento = Number(readlineSync.question ("Qual e o ano do vencimento? "));


console.log("O  numero de aplices são: "+numeroApolice );
console.log("O nome é: "+nomeSobreNome );
console.log("Tem ",idade,"anos de idade");
console.log("A data de vencimento e:",+diaVencimento+ "/" + mesVencimento +"/" +anoVencimento);


if(numeroApolice<1000 && numeroApolice>9999){
    console.log(0);
}
else if(diaVencimento >30){
    console.log(0);
}
else if(mesVencimento >12){
    console.log(0);
}
else{
    console.log("erro")
 }
