const entrada = require("readline-sync");

// 1. Criar array vazio
const materiais = [];
const totalMateriais = 4;

console.log("=== CADASTRO DE MATERIAIS ===");

// 2. Laço para cadastrar 4 materiais
for (let i = 1; i <= totalMateriais; i++) {
  console.log(`\nMaterial ${i}:`);
  const nome = entrada.question("Nome do material: ");
  const quantidade = entrada.questionInt("Quantidade atual: ");
  const estoqueMinimo = entrada.questionInt("Estoque minimo: ");

  // 3. Criar o objeto com as propriedades
  const material = {
    nome: nome,
    quantidade: quantidade,
    estoqueMinimo: estoqueMinimo
  };

  // 4. Adicionar o objeto ao array com push()
  materiais.push(material);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

// 5. Percorrer o array após o cadastro completo
for (let i = 0; i < materiais.length; i++) {
  const item = materiais[i];
  
  // 6. Testar se quantidade < estoqueMinimo para definir a situação
  let situacao = "";
  if (item.quantidade < item.estoqueMinimo) {
    situacao = "REPOR ESTOQUE";
  } else {
    situacao = "ESTOQUE OK";
  }

  // 7. Exibir nome, quantidade, estoque mínimo e situação
  console.log(`Material: ${item.nome} | Qtd Atual: ${item.quantidade} | Qtd Mínima: ${item.estoqueMinimo} | Situação: ${situacao}`);
}