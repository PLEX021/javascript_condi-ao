const readlineSync = require('readline-sync');
const compra =  Number(readlineSync.question ("Qual e o valor da compra ?"));


calculo1=compra*30/100
valortotal1=compra + calculo1
calculo2=compra*45/100
valortotal2=compra + calculo2


if (compra >= calculo1){
    console.log("se sua compra for maior que 50 e 30% de taxa",valortotal1);
}
else if(compra <= calculo2){
    console.log("se sua compra for menorque 50 e 45% de taxa",valortotal2);
}
else{
    console.log("erro");
}








/*3. Um brechó revende produtos usados, e fixa o preço de venda de cada produto
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de
aquisição de um produto e mostre o seu valor de venda.*/