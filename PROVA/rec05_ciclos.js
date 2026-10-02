// EXERCÍCIO 05 - Projeção de produção por ciclo
const entrada = require("readline-sync");

console.log("=== PROJEÇÃO DE PRODUÇÃO ACUMULADA ===");

const produtosPorCiclo = entrada.questionInt("Quantos produtos sao produzidos por ciclo? ");

console.log("\n--- PRODUÇÃO ACUMULADA (CICLOS 1 A 12) ---");

// Laço de repetição do ciclo 1 até o 12
for (let ciclo = 1; ciclo <= 12; ciclo++) {
  const producaoAcumulada = ciclo * produtosPorCiclo;
  console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
}