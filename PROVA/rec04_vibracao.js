const entrada = require("readline-sync");

console.log("=== ANÁLISE DE VIBRAÇÃO DE EQUIPAMENTO ===");

const vibracao = entrada.questionFloat("Digite o nivel de vibracao (mm/s): ");

console.log(`\nVibração informada: ${vibracao} mm/s`);


if (vibracao <= 3.0) {
  console.log("Situação: ESTÁVEL");
} else if (vibracao <= 6.0) {
  console.log("Situação: ATENÇÃO");
} else {
  console.log("Situação: CRÍTICA");
}