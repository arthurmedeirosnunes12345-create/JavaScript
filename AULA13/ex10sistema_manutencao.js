const fs = require('fs');
const readline = require('readline-sync');

function sistemaManutencao() {
  const caminhoArquivo = 'manutencoes.json';
  const caminhoBackup = 'manutencoes_backup.json';

  try {
    // 1. Verificar se o arquivo existe antes de ler
    if (!fs.existsSync(caminhoArquivo)) {
      throw new Error(`O arquivo ${caminhoArquivo} não foi encontrado.`);
    }

    // 2. Ler e converter o arquivo JSON
    const conteudoBruto = fs.readFileSync(caminhoArquivo, 'utf-8');
    const maquinas = JSON.parse(conteudoBruto);

    let precisamManutencao = 0;

    console.log('====================================================');
    console.log('          SISTEMA DE MANUTENÇÃO INDUSTRIAL          ');
    console.log('====================================================');

    // 3. Listar máquinas, calcular horas e classificar
    maquinas.forEach(m => {
      const horasRestantes = m.limiteManutencao - m.horasUso;
      let status = 'NORMAL';

      // Precisa de manutenção se ultrapassou o limite e ainda não foi realizada
      if (horasRestantes <= 0 && !m.manutencaoRealizada) {
        status = 'MANUTENÇÃO NECESSÁRIA';
        precisamManutencao++;
      }

      console.log(`ID: ${m.id} | Máquina: ${m.maquina} (${m.setor})`);
      console.log(`Horas de Uso: ${m.horasUso}h / Limite: ${m.limiteManutencao}h`);
      console.log(`Horas Restantes: ${horasRestantes}h`);
      console.log(`Status: ${status}`);
      console.log(`Manutenção Realizada: ${m.manutencaoRealizada ? 'SIM' : 'NÃO'}`);
      console.log('----------------------------------------------------');
    });

    // 4. Contador
    console.log(`Total de equipamentos que precisam de manutenção: ${precisamManutencao}`);
    console.log('====================================================\n');

    // 5. Solicitar um ID ao usuário
    const idBusca = readline.questionInt('Informe o ID da máquina para registrar manutenção: ');
    const maquinaEncontrada = maquinas.find(m => m.id === idBusca);

    if (!maquinaEncontrada) {
      console.log('\nMáquina não encontrada!');
      return;
    }

    // 6. Confirmar alteração de manutenção realizada
    const confirmar = readline.keyInYNStrict(`Deseja marcar a manutenção da máquina "${maquinaEncontrada.maquina}" como REALIZADA?`);

    if (confirmar) {
      // Registrar manutencaoRealizada = true
      maquinaEncontrada.manutencaoRealizada = true;

      // 7. Criar backup antes da alteração
      fs.writeFileSync(caminhoBackup, conteudoBruto, 'utf-8');
      console.log('\n[BACKUP] Backup criado em manutencoes_backup.json.');

      // 8. Gravar o JSON atualizado
      fs.writeFileSync(caminhoArquivo, JSON.stringify(maquinas, null, 2), 'utf-8');
      console.log('[SUCESSO] Manutenção registrada e arquivo atualizado com sucesso!');
    } else {
      console.log('\nOperação cancelada. Nenhum dado foi alterado.');
    }

  } catch (erro) {
    // Tratamento de falhas gerais
    console.error(`\n[ERRO NA EXECUÇÃO]: ${erro.message}`);
  }
}

sistemaManutencao();