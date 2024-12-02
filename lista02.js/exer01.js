const readlineSync = require('readline-sync');
const numeroUm  = Number(readlineSync.question ("Qual e o numero um?"));
const numeroDois = Number(readlineSync.question (" Qual e o numero dois?"));
const numeroTres = Number(readlineSync.question ("Qual e o numero tres?"));
const stringUm = Number(readlineSync.question ("Qual e o valor string um?"));
const stringDois = Number(readlineSync.question (" Qual e o valor string?"));
const stringTres = Number(readlineSync.question ("Qual e o  valor string?"));


if(numeroUm == 300){//A
    console.log("Numero um e igual a trezentos")
}
else if(numeroUm == numeroTres){//B
    console.log("falso")
}
if(numeroUm > numeroTres){//C
    console.log("verdadeiro")
}
else if(numeroDois < numeroTres){//D
    console.log("false")
}
if(numeroUm == stringUm){//E
    console.log("ilegal")
}
else if(numeroUm == "Um"){//F
    console.log("ilegal")
}
if(numeroUm == "Trezentos"){//G
    console.log("ilegal")
}
else if(numeroUm == "300"){//H
    console.log("falso")
}
if(stringDois == "Dois"){//I
    console.log("falso")
}
else if(stringUm == "Rinoceronte"){//J
    console.log("falso")
}
 if(stringTres !== "Rinoceronte" ){//K
    console.log("verdadeiro")
}
else if(stringTres =! "Rinoceronte" && numeroUm > 1000){//L
    console.log("falso")
}
 if(numeroDois <= numero1 ){//M
    console.log("verdadeiro")
}
else if(numeroDois < 30 ){//N
    console.log("falso")
}
if(numeroUm >= 200){//O
    console.log("verdadeiro")
}
else if(numeroUm >= numeroDois + numeroTres){//P
    console.log("verdadeiro")
}
if(numeroUm > numeroDois  ){//Q
    console.log("verdadeiro")
}
else if(numeroUm < numero3){//R
    console.log("falso")
}
if(numeroUm == 100  ){
    console.log("falso")
}
else if(numeroUm > numeroTres ){
    console.log("verdadeiro")
}
if(numeroUm < 10 && numeroTres > 10 ){
    console.log("falso")
}
else if( numeroTres > 10 ){
    console.log("verdadeiro")
}
if( numeroTres > 10 ){
    console.log("verdadeiro")
}
else if( numeroTres > 10 ){
    console.log("verdadeiro")
}
if( numeroTres > 10 ){
    console.log("verdadeiro")
}
else if( numeroUm == 30 && numeroDois == 100 ){
    console.log("falso")
}
if(numero3 == 100){
    console.log("verdadeiro")
}



/*1. Considere as variáveis abaixo, inicializadas como segue:
numero1 = 300 numero2 = 100 numero3 = 5
string1 = "Rinoceronte" string2 = "Zebra" string3 = "bug”
Para cada uma das seguintes expressões booleanas, classifique-a como 
Verdadeira, Falsa ou Ilegal.
a. numero1 = numero3
b. numero1 > numero3
c. numero2 < numero3
d. numero1 = string1
e. numero1 = "Um"
f. numero1 = "Trezentos"
g. numero1 = "300"
h. string2 = "Dois"
i. string1 = "Rinoceronte"
j. string3 <> "Rinoceronte" 
k. string3 <> "Rinoceronte" OU numero1 > 1000
l. numero2 <= numero1 / 3
m. numero1 >= 200
n. numero1 >= numero2 + numero3
o. numero1 > numero2 E numero1 < numero3
p. numero1 = 100 OU numero1 > numero3
q. numero1 < 10 OU numero3 > 10
r. numero1 = 30 E numero2 = 100 OU numero3 = 100*/
