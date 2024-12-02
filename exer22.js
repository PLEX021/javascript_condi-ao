const readlineSync = require('readline-sync');
const faltasAluno= String(readlineSync.question ("Quantas faltas os alunos tiveram nos quatro bimestres?"));
const notasAluno= String(readlineSync.question ("qual foi a nota que  aluno tirou nos quatro bimestre?"));






if(25/100 == faltasAluno &&  notasAluno >= 7){
    console.log("As faltas faltas finais foram",faltasAluno);
    console.log("As notas finais que os alunos tiraram foi",notasAluno);
}
else{
    console.log("reprovado")
}