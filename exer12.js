const readlineSync = require('readline-sync');
const kilos =  Number(readlineSync.question ("Quantos kilos seu cao tem ?"));
const nomeCao=  String(readlineSync.question ("Qual o nome do seu cao ?"));
const racaeCao=  String(readlineSync.question ("Qual e a raca do seu cao ?"));
const idadeCao=  Number(readlineSync.question ("Qual a idade do seu cao ?"));
const pesoCao=  Number(readlineSync.question ("Qual o peso do seu cao ?"));


 console.log("os dados do meu cao e:",nomeCao);
 console.log("a raca do meu cao e:",racaeCao);
 console.log("a idade do meu cao e:",idadeCao);
 console.log("o peso do meu cao e:",pesoCao);


if(kilos < 8){
    console.log("se cao tiver com menos de 8kg  o preco e de: R$50.00");
}
else if(kilos >= 8 && kilos <= 14){
    console.log("se cao tiver 8 a 14kg o preco e de: R$70.00");
}
else if(kilos >= 15 && kilos <= 39){
    console.log("se cao tiver 15 a 39kg o preco e de: R$100.00");
}
else if(kilos > 40){
    console.log("se cao tiver 40kg ou mais o preco e de: R$125.00");
}
else{
    console.log("erro");
}
