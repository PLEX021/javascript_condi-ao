const readlineSync = require('readline-sync');
const temperatura = Number(readlineSync.question ("qual e a tremperatura? "));


if(temperatura <= 15){
console.log("muito frio")
}
else if(temperatura >= 16 && temperatura <= 23){
 console.log("frio")
}
else if(temperatura >=24 && temperatura <= 26){
 console.log("agradavel")
}
if(temperatura >= 27 && temperatura <= 30 ){
    console.log("quente")
}
if(temperatura >= 31){
    console.log("muito quente")
}
else{
    console.log("erro")
 }
