const readlineSync = require('readline-sync');
const encomenda =  Number(readlineSync.question ("Quanto o peso da emcomenda ?"));


if(encomenda <= 500) {
    valorFrete = encomenda * 1.10;
console.log("O  valor do frete e:",valorFrete);
}
else if(encomenda > 500 && encomenda < 2000 ){
    valorFrete = encomenda * 2.20;
    console.log("O  valor do frete e:",valorFrete)
}
else if(encomenda > 2000 && encomenda < 10000){
    valorFrete = encomenda * 3.7;
    console.log("O  valor do frete e:",valorFrete)
}
else if(encomenda > 10000){
    valorFrete = encomenda * 5.00 + 3.80;
    console.log("O  valor do frete e:",valorFrete)
}
else{
    console.log("erro");
}
  







/*6. Crie um algoritmo para uma empresa de transportes que, a partir do peso de uma
encomenda fornecida pelo usuário, calcule o preço da remessa conforme a
seguinte tabela:
Peso da encomenda Valor
500 gramas ou menos R$ 1,10
Mais de 500 gramas, mas não mais que
2 quilos
R$ 2,20
Mais de 2 quilos, mas não mais de 10
quilos
R$ 3,70
Mais de 10 quilos R$ 5,00 mais R$ 3,80/kg pelo peso
que ultrapassar 10 Kg*/