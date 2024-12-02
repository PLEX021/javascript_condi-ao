const readlineSync = require('readline-sync');
const livros =  Number(readlineSync.question ("Quantos livros o cliente vai comprar ?"));


 
calculo0 = 0
calculo1 = 5
calculo2 = 15
calculo3 = 30
calculo4 = 60


if(livros == 0){
    console.log("se o cliente comprar zero livro ele ganhara :",calculo0," pontos");
}
else if(livros == 1){
    console.log("se o cliente comprar um livro ele ganhara :",calculo1," pontos");
}
if(livros == 2){
    console.log("se o cliente comprar dois livro ele ganhara :",calculo2," pontos");
}
else if(livros == 3){
    console.log("se o cliente comprar tres livro ele ganhara :",calculo3," pontos");
}
 if(livros == 4){
    console.log("se o cliente comprar quatro livro ele ganhara :",calculo4," pontos");
}
else{
    console.log("erro");
}




/*5. O programa de fidelidade de uma determinada livraria premia seus clientes de 
acordo com o número de livros comprados a cada mês. Os pontos são atribuídos 
da seguinte forma:
• Se um cliente comprar 0 livros, ele ganhará 0 pontos.
• Se um cliente comprar um livro, ele ganhará 5 pontos.
• Se um cliente comprar dois livros, ele ganhará 15 pontos.
• Se um cliente comprar 3 livros, ele ganhará 30 pontos.
• Se um cliente comprar 4 ou mais livros, ele ganhará 60 pontos.
Crie um algoritmo que leia o número de livros comprado por um usuário e exiba 
o número de pontos correspondentes.*/