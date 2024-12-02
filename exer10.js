const readlineSync = require('readline-sync');
const jogos =  Number(readlineSync.question ("qual foi o valor dos jogos com ou sem discontos(se houver) ?"));

if(jogos < 10){
    console.log("o valor normal sem disconto e 150,00 R$")
}
else if(jogos >= 10 && jogos <= 19){
    desconto=jogos * 20/100
    console.log("se comprar 10 a 19 jogos o desconto vai ser de",desconto ,"%")
}
else if(jogos >= 20 && jogos <= 49){
    desconto=jogos * 30/100
    console.log("se comprar 20 a 49 jogos o desconto vai ser de",desconto ,"%")
}
else if(jogos >= 50 && jogos <= 99){
    desconto=jogos * 40/100
    console.log("se comprar 50 a 99 jogos o desconto vai ser de",desconto ,"%")
}  
else if(jogos >= 100 ){
    desconto=jogos * 50/100
    console.log("se comprar 100 ou mais jogos o desconto vai ser de",desconto ,"%")
}
else{
    console.log("erro");
}