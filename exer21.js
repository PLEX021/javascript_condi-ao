const readlineSync = require('readline-sync');
const azul= String(readlineSync.question ("Que  cor primaria voce escolhe?"));
const amarelo = String(readlineSync.question ("Que  cor primaria voce escolhe?"));
const vermelho = String(readlineSync.question ("Que  cor primaria voce escolhe?"));



console.log("A cor primaria que eu escolheu e:",azul);
console.log("A cor primaria que eu escolheu e:",amarelo);
console.log("A cor primaria que eu escolheu e:",vermelho);

const juncaoCores1 =String(readlineSync.question ("?"));
const juncaoCores2 =String(readlineSync.question ("Que juncao de cores voce escolhe?"));
const juncaoCores3 =String(readlineSync.question ("Que  juncao de cores voce escolhe?"));

if(azul == "azul" && amarelo == "amarelo" && vermelho == "vermelho"){
    console.log("cores primarias")

}
else if(juncaoCores1 == vermelho && juncaoCores1 == azul){
    console.log("a juncao das duas cores irá da roxo")
}
else if(juncaoCores2 ===vermelho && juncaoCores2 ==amarelo){
    console.log("laranja")
}
else if(juncaoCores2 == azul && juncaoCores3 === amarelo){
    console.log("verde")
}
else{
    console.log("erro")
}