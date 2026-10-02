const entrada = require("readline-sync");

function calcularAproveitamento(util, total) {
  return (util / total) * 100;
}


function classificarAproveitamento(percentual) {
  if (percentual >= 90) {
    return "EXCELENTE";
  } else if (percentual >= 75) {
    return "ADEQUADO";
  } else {
    return "REVISAR PROCESSO";
  }
}

console.log("=== ANÁLISE DE APROVEITAMENTO DE MATÉRIA-PRIMA ===");


const qteTotal = entrada.questionFloat("Digite a quantidade total de materia-prima: ");
const qteUtil = entrada.questionFloat("Digite a quantidade util aproveitada: ");

const percentualObtido = calcularAproveitamento(qteUtil, qteTotal);
const classificacaoFinal = classificarAproveitamento(percentualObtido);

console.log("\n--- RELATÓRIO FINAL ---");
console.log(`Quantidade Total: ${qteTotal}`);
console.log(`Quantidade Útil: ${qteUtil}`);
console.log(`Aproveitamento: ${percentualObtido.toFixed(2)}%`);
console.log(`Classificação: ${classificacaoFinal}`);
