const fs = require('fs');

function gerarRelatorio() {
  // 1. Leitura do arquivo JSON
  const conteudo = fs.readFileSync('producao.json', 'utf-8');
  const dados = JSON.parse(conteudo);

  let atingiramMeta = 0;

  console.log("========================================");
  console.log("       RELATÓRIO DE PRODUÇÃO");
  console.log("========================================");

  // 2. Processamento dos dados de cada máquina
  dados.forEach(item => {
    const maquina = item.maquina;
    const meta = item.meta;
    const produzido = item.produzido;

    // Cálculo do percentual
    const percentual = (produzido / meta) * 100;
    let situacao = "";

    // Condicionais e contador
    if (percentual >= 100) {
      situacao = "META ATINGIDA";
      atingiramMeta++;
    } else if (percentual >= 80) {
      situacao = "ATENÇÃO";
    } else {
      situacao = "ABAIXO DA META";
    }

    // Exibição formatada com 2 casas decimais (.toFixed(2))
    console.log(`Máquina: ${maquina}`);
    console.log(`Meta: ${meta}`);
    console.log(`Produzido: ${produzido}`);
    console.log(`Desempenho: ${percentual.toFixed(2)}%`);
    console.log(`Situação: ${situacao}`);
    console.log("----------------------------------------");
  });

  // 3. Resumo final
  console.log(`Total de máquinas que atingiram a meta: ${atingiramMeta}`);
  console.log("========================================");
}

gerarRelatorio();