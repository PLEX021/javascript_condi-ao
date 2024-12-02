const readlineSync = require('readline-sync');
const dolar=  Number(readlineSync.question ("Qual o valor do dolar atual ?"));
const dolarDeUmcentavo=  Number(readlineSync.question ("Qual o valor do dolar atual com moedas de um centavo?"));
const dolarDeCinco=  Number(readlineSync.question ("Qual o valor do dolar atual com moedas de cinco centavos?"));
const dolarDeDez=  Number(readlineSync.question ("Qual o valor do dolar atual com moedas de dez centavos?"));
const dolarDeVinteECinco=  Number(readlineSync.question ("Qual o valor do dolar atual com moedas de vinte e cinco centavos?"));
const dolarDeCinquenta=  Number(readlineSync.question ("Qual o valor do dolar atual com moedas de ciquenta centavos?"));


moedasDeUM = dolarDeUmcentavo *0.01;
moedasDeCinco = dolarDeCinco *0.05
moedasDeDez=dolarDeDez *0.10
moedasDeVinteCinco=dolarDeVinteECinco *0.25;
moedasDeCinquenta= dolarDeCinquenta* 0.50;



calcularMoedas=moedasDeUM+moedasDeCinco+moedasDeDez+moedasDeVinteCinco+moedasDeCinquenta;

if(dolar == calcularMoedas){
    console.log("voce ganhou! ,o valor do dolar e:",calcularMoedas);
}
else if(dolar != calcularMoedas){
  console.log("voce perdeu,  e o valor e:",calcularMoedas);
}
else{
    console.log("erro");
}


/*8. “Jogo do Dolar” – Construa um algoritmo onde o usuário informa o valor do dólar
no câmbio atual e um certo número de moedas de 1, 5, 10, 25 e 50 centavos de
real. Se o valor total das moedas for o necessário para comprar exatamente um
dolar, o programa deve parabenizar o usuário por ganhar o jogo. Caso contrário,
o programa deve exibir uma mensagem indicando se o valor inserido foi maior ou
menor do que o necessário.
Exemplo: se o dólar estiver a R$ 3.78, e o usuário informar 3 moedas de 1 centavo,
uma de 5 centavos, duas de 10 centavos, duas de 25 centavos e 6 de 50 centavos,
ele ganha o jogo. O mesmo aconteceria se ele informasse 3 moedas de 1 centavo,
13 de 25 centavos e uma de cinquenta centavos.*/ 