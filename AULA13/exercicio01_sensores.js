// Importa o módulo nativo 'fs' (File System) para manipular arquivos
const fs = require('fs');

// 1. Definição do array com os 3 objetos de sensores
const sensores = [
  {
    codigo: 101,
    tipo: "Temperatura",
    leituraAtual: 78.5,
    status: "Operando"
  },
  {
    codigo: 102,
    tipo: "Pressão",
    leituraAtual: 12.4,
    status: "Alerta"
  },
  {
    codigo: 103,
    tipo: "Temperatura",
    leituraAtual: 92.1,
    status: "Alerta"
  }
];

// 2. Converte o array/objeto para texto JSON com indentação de 2 espaços
const conteudoJSON = JSON.stringify(sensores, null, 2);

// 3. Grava o conteúdo fisicamente no arquivo 'sensores.json'
fs.writeFileSync('sensores.json', conteudoJSON, 'utf-8');

// 4. Mensagem de sucesso no terminal
console.log('✅ Arquivo "sensores.json" gerado e salvo com sucesso!');