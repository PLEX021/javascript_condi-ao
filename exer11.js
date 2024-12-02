const readlineSync = require('readline-sync');
const segundos =  Number(readlineSync.question ("Tem quantos segundos?"));


if(segundos >= 60 && segundos <=3599){
    calculoMinuto=segundos/60;
calculoHoras=segundos/3600;
calculoDias=segundos/86400;
    console.log("o segundo tem",calculoMinuto,"minutos",calculoHoras,"horas",calculoDias,"dias");
}
else if(segundos >= 3600 && segundos <= 86399){
    calculoHoras=segundos/3600;
    calculoMinuto=segundos/60;
    calculoDias=segundos/86400;
    console.log("o segundo tem",calculoHoras,"horas",calculoMinuto,"minutos",calculoDias,"dias");
}
else if(segundos >= 86400){
    calculoDias=segundos/86400; 
    calculoHoras=segundos/3600;
    calculoMinuto=segundos/60;    
    console.log("o segundo tem",calculoDias,"dias",calculoHoras,"horas",calculoMinuto,"minutos",);
}
else{
    console.log("erro");
}









