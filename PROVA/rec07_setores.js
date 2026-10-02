const entrada = require("readline-sync");

const setores = []; 

console.log("=== CADASTRO DE SETORES ===");


for (let i = 1; i <= 6; i++) {
  const nomeSetor = entrada.question(`Digite o nome do setor ${i}: `);
  setores.push(nomeSetor);
}

console.log("\n--- LISTA DE SETORES CADASTRADOS ---");

for (let index = 0; index < setores.length; index++) {
  console.log(`${index + 1} - ${setores[index]}`);
}