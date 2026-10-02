const entrada = require("readline-sync");

console.log("=== CÁLCULO DE CUSTO DE MATERIAIS ===");

const nomePeca = entrada.question("Digite o nome da peca: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario (R$): ");

const valorTotal = quantidade * precoUnitario;

console.log("\n--- RESUMO DA COMPRA ---");
console.log(`Peça: ${nomePeca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);