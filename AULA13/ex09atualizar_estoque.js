const fs = require('fs');
const readline = require('readline-sync');

function atualizarEstoque() {
  // 1. Ler o arquivo de materiais
  const conteudo = fs.readFileSync('materiais.json', 'utf-8');
  const materiais = JSON.parse(conteudo);

  // 2. Pedir o código do material ao usuário
  const codigoBusca = readline.question('Informe o código do material: ').trim();

  // 3. Localizar o registro
  const material = materiais.find(m => m.codigo.toLowerCase() === codigoBusca.toLowerCase());

  if (!material) {
    console.log('Material não encontrado!');
    return;
  }

  // Mostra a quantidade atual
  console.log(`\nMaterial: ${material.nome}`);
  console.log(`Quantidade atual: ${material.quantidade}`);

  // 4. Solicitar a nova quantidade
  const novaQuantidade = readline.questionInt('Solicite a nova quantidade: ');

  // 5. Alterar o objeto em memória
  material.quantidade = novaQuantidade;

  // 6. Criar backup do arquivo original
  fs.writeFileSync('materiais_backup.json', conteudo, 'utf-8');
  console.log('\n[BACKUP] Criado o arquivo materiais_backup.json com sucesso.');

  // 7. Gravar novamente o array atualizado em materiais.json
  fs.writeFileSync('materiais.json', JSON.stringify(materiais, null, 2), 'utf-8');
  console.log('[ATUALIZADO] Arquivo materiais.json atualizado com sucesso!');
}

atualizarEstoque();