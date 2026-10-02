const entrada = require("readline-sync");

console.log("=== REGISTRO DE ATENDIMENTOS TÉCNICOS ===");

let somaTempos = 0;
const totalAtendimentos = 6;


for (let i = 1; i <= totalAtendimentos; i++) {
  const tempo = entrada.questionFloat(`Digite o tempo do atendimento ${i} (em minutos): `);
  somaTempos += tempo;
}


const media = somaTempos / totalAtendimentos;

console.log("\n--- RESULTADO FINAL ---");
console.log(`Soma de todos os tempos: ${somaTempos.toFixed(2)} minutos`);
console.log(`Média de tempo por atendimento: ${media.toFixed(2)} minutos`);