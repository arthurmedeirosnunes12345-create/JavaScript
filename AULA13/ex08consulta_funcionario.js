const fs = require('fs');
const readline = require('readline-sync');

function consultarFuncionario() {
  // 1. Leitura e conversão do arquivo JSON
  const conteudo = fs.readFileSync('funcionarios.json', 'utf-8');
  const funcionarios = JSON.parse(conteudo);

  // 2. Solicitação da matrícula via teclado
  const matriculaBusca = readline.question('Informe a matricula: ');

  // 3. Busca do funcionário no array
  const funcionarioEncontrado = funcionarios.find(
    f => String(f.matricula) === String(matriculaBusca).trim()
  );

  console.log(""); // Linha em branco para organizar a saída

  // 4. Exibição dos resultados (condicional)
  if (funcionarioEncontrado) {
    console.log('Funcionário encontrado!');
    console.log(`Nome: ${funcionarioEncontrado.nome}`);
    console.log(`Setor: ${funcionarioEncontrado.setor}`);
    console.log(`Cargo: ${funcionarioEncontrado.cargo}`);
  } else {
    console.log('Funcionário não encontrado! Verifique a matrícula informada.');
  }
}

consultarFuncionario();