const entrada = require("readline-sync");

// 1. Criar o acumulador iniciado em zero
let totalDefeitos = 0;
const totalInspecoes = 6;

// 2. Usar laço for para solicitar exatamente 6 valores
for (let i = 1; i <= totalInspecoes; i++) {
  const qtdDefeitos = entrada.questionInt(`Informe a quantidade de pecas com defeito na inspecao ${i}: `);
  
  // 3. Somar cada valor ao acumulador
  totalDefeitos += qtdDefeitos;
}

// 4. Calcular a média somente ao final
const mediaDefeitos = totalDefeitos / totalInspecoes;

// 5. Exibir total e média
console.log("\n--- RESULTADO DA INSPEÇÃO ---");
console.log(`Total de peças com defeito: ${totalDefeitos}`);
console.log(`Média por inspeção: ${mediaDefeitos.toFixed(2)}`);