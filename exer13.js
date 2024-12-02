const readlineSync = require('readline-sync');
console.log("para escolher Elevar ao quadrado digite 1")
console.log("para escolher Raiz quadrada digite 2")
console.log("para escolher seno 3")
console.log("para escolher exponencial 4")
const operacao =  Number(readlineSync.question ("Qual a opcao que voce  escolhe ?"));

if(operacao == 1){
 console.log("Você escolheu o numero: ",operacao,"elevar ao quadrado")
}
else if(operacao == 2){
    console.log("Você escolheu o numero: ",operacao,"Raiz quadrada")
}
else if(operacao == 3){
    console.log("Você escolheu o numero: ",operacao,"seno")
}
if(operacao == 4){
    console.log("Você escolheu o numero: ",operacao,"exponencial")
}
else{
    console.log("erro");
}