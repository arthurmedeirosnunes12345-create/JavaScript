const entrada = require("readline-sync");

const ferramentas = [];

console.log("=== CADASTRO DE FERRAMENTAS DO ALMOXARIFADO ===");


for (let i = 1; i <= 4; i++) {
  console.log(`\nFerramenta #${i}:`);
  const nome = entrada.question("Nome da ferramenta: ");
  const quantidade = entrada.questionInt("Quantidade disponivel: ");
  const minimo = entrada.questionInt("Quantidade minima exigida: ");

  const ferramenta = { nome, quantidade, minimo };
  ferramentas.push(ferramenta);
}

console.log("\n================ RELATÓRIO DE ESTOQUE ================");

for (let i = 0; i < ferramentas.length; i++) {
  const item = ferramentas[i];
  let situacao = "";

  if (item.quantidade < item.minimo) {
    situacao = "REPOR";
  } else {
    situacao = "ESTOQUE SUFICIENTE";
  }

  console.log(`Ferramenta: ${item.nome} | Disp: ${item.quantidade} | Mín: ${item.minimo} | Situação: ${situacao}`);
}