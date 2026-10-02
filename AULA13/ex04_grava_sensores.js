const fs = require('fs');

// Criação do array com 5 sensores
const sensores = [
    { codigo: "S01", tipo: "Temperatura", valor: 85.4, unidade: "°C", status: "Alerta" },
    { codigo: "S02", tipo: "Pressão", valor: 2.1, unidade: "bar", status: "Normal" },
    { codigo: "S03", tipo: "Vibração", valor: 12.8, unidade: "mm/s", status: "Alerta" },
    { codigo: "S04", tipo: "Nível", valor: 75.0, unidade: "%", status: "Normal" },
    { codigo: "S05", tipo: "Temperatura", valor: 92.1, unidade: "°C", status: "Alerta" }
];

// Conversão para JSON formatado e gravação no arquivo
const dadosJSON = JSON.stringify(sensores, null, 2);
fs.writeFileSync('monitoramento.json', dadosJSON, 'utf-8');

console.log('Arquivo monitoramento.json gerado com sucesso!');