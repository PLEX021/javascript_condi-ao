const readlineSync = require('readline-sync');
const primeiroNumero= Number(readlineSync.question ("digite um numero:"));
const segundoNumero= Number(readlineSync.question ("digite um numero:"));

if(primeiroNumero < segundoNumero){
    console.log("O número que voce digitou foi:",segundoNumero)
}
else{
    console.log("digite outro numero")
}