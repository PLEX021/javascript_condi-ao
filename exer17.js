const readlineSync = require('readline-sync');
const numeroRomano = Number(readlineSync.question ("coloque um numero entre 1 e 10 :"));

if(numeroRomano >= 1 && numeroRomano <= 10){
   if(numeroRomano == 1){
   
      console.log("I");
   }
   else if(numeroRomano === 2){
      console.log("II")
   }
   else if(numeroRomano === 3){
      console.log("III")
   }
   else if(numeroRomano === 4){
      console.log("IV")
      
   }
   else if(numeroRomano === 5){
      console.log("V")
      
   }
   else if(numeroRomano === 6){
      console.log("VI")
   }
   else if(numeroRomano === 7){
      console.log("VII")
   }
   else if(numeroRomano === 8){
      console.log("VIII")
   }
   else if(numeroRomano === 9){
      console.log("IX")
   }
   else if(numeroRomano === 10){
      console.log("X")}
   
}
else{
   console.log("erro")
}