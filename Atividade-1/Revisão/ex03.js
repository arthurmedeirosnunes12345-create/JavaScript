const entrada = require("readline-sync");

// 1. Criar array vazio
const operadores = [];
const limite = 5;

// 2. Laço para solicitar 5 nomes
for (let i = 0; i < limite; i++) {
  const nome = entrada.question(`Digite o nome do operador ${i + 1}: `);
  // 3. Usar push() dentro do laço de cadastro
  operadores.push(nome);
}

console.log("\n--- LISTA DE OPERADORES ---");

// 4. Segundo laço para percorrer o array
// 5. Usando .length no critério de parada
for (let i = 0; i < operadores.length; i++) {
  // 6. Exibir no formato: 1 - Nome, 2 - Nome, etc.
  console.log(`${i + 1} - ${operadores[i]}`);
}