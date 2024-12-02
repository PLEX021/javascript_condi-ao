const readlineSync = require('readline-sync');
console.log("se a data do dia e  do mes se multiplicarem e dar o ano de dois digitos, essa data e 'magica'")
console.log("se data do dia e do mes nao se mutiplicarem ai ela e normal")


const dia =  Number(readlineSync.question ("qual eo dia da sua data  "));
const mes =  Number(readlineSync.question ("qual eo mes da sua data? "));
const ano =  Number(readlineSync.question ("qual eo ano da sua data? "));


if(dia == 13){
console.log(" o dia da data e:",dia)
}
else if(mes == 4){
    console.log("o mes da data e:",mes) 
}
else if(ano == 52){
    console.log("o ano da  data e:",ano)
}
else if(data == 13){
    console.log("a o dia  data:",data)
}
else{
    console.log("erro")
 }
