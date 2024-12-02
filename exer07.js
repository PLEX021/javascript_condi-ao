
const readlineSync = require('readline-sync');
const telefoniaMovel =  Number(readlineSync.question ("Quanto foi a cobranca das mensagens nesse mes ?"));

if(telefoniaMovel <= 60){
    console.log("O valor basico mensal e de 5 reais")
}
else if(telefoniaMovel > 60 && telefoniaMovel <= 180){
acharValorQueEcedeuOPlanoMensal=telefoniaMovel - 60;
calcularOQueUltrapassou = acharValorQueEcedeuOPlanoMensal * 0.05;
    console.log("nesse mes a cobranca foi de:",calcularOQueUltrapassou + 5);
}
else if(telefoniaMovel > 180){
calculoQuePassouDoPlanoNormal= telefoniaMovel - 180;
calcularOQueUltrapassou= calculoQuePassouDoPlanoNormal * 0.10;
calculoDosDoisImpostos=calcularOQueUltrapassou * 12/100;

console.log("nesse mes a cobranca foi de:",calcularOQueUltrapassou +5 )
console.log("os empostos foi de:",calculoDosDoisImpostos )
}   
else{
    console.log("erro");
}







/*7. Uma certa operadora de telefonia móvel cobra R$ 5,00 mensais pelo seu plano
básico de transmissão de SMS (mensagens de texto), sendo que taxas adicionais
são cobradas conforme as regras abaixo:
a. As primeiras 60 mensagens estão incluídas no plano básico;
b. Se o usuário mandar mais de 60 mensagens, cada mensagem adicional
custará R$ 0.05, até o limite de 180 mensagens;
c. Acima de 180 mensagens, o valor de cada uma delas passa a R$ 0,10;
d. A soma dos impostos estaduais e federais amonta a 12% do valor de cada
fatura.
Com base nessas informações, crie um algoritmo para ler o número total de
mensagens enviadas por um usuário. Ao final, calcule o valor da conta e mostre
todos os dados, incluindo o valor da conta com e sem impostos.
*/