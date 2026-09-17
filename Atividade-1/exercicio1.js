const entrada =  require('readline-sync');

const qtdPorHora = entrada.questionInt ("Digite a quantidade de peca produzida por hora:")

const  horasTurno = entrada.questionInt ("Digiteas horas trabalhadas por turno: ");

const prodTotal = qtdPorHora * horasTurno

console.log(" === RELATORIO DE PRODUCAO === ")
console.log(`Pecas produzidas por hora: ${qtdPorHora}`);
console.log(`Horas do turno : ${horasTurno}`);
console.log(`Total produzido: ${prodTotal}`);
