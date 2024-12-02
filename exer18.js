const readlineSync = require('readline-sync');
const base1= Number(readlineSync.question ("Qual e a base deste retangulo?"));
const altura1 = Number(readlineSync.question ("Qual e a altura deste retagulo?"));
const base2= Number(readlineSync.question ("Qual e a base detse retangulo?"));
const altura2 = Number(readlineSync.question ("Qual e a altura deste retagulo?")) 

const area1=base1*altura1;
const area2=base2*altura2;

if(area1 == area2){
    console.log("os dois retangulos tem as mesmas areas")
}
 else if(area1 > area2){
    console.log("O primeiro retangulo tem a area maior que a do segundo");
}
 else if(area2 > area1){
    console.log("O segundo retangulo tem a rea maior que a do primero");
}
else{
    console.log("erro")
}
