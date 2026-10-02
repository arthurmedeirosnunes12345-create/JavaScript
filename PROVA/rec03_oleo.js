const entrada = require("readline-sync");

console.log("=== VERIFICAÇÃO DO NÍVEL DE ÓLEO ===");


const nivelOleo = entrada.questionFloat("Digite o nivel de oleo (%): ");

console.log(`\nNível informado: ${nivelOleo}%`);


if (nivelOleo >= 40 && nivelOleo <= 80) {
  console.log("Status: NÍVEL NORMAL");
} else {
  console.log("Status: INSPEÇÃO NECESSÁRIA");
}