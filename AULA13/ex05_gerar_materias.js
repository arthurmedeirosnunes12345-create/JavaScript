const fs = require('fs');

const materiais = [
    { codigo: "M01", descricao: "Aço SAE 1020", quantidade: 50, valorUnitario: 32.50 },
    { codigo: "M02", descricao: "Chapa de Alumínio", quantidade: 30, valorUnitario: 85.00 },
    { codigo: "M03", descricao: "Tubo de Cobre 3/4", quantidade: 100, valorUnitario: 18.25 },
    { codigo: "M04", descricao: "Barra de Bronze", quantidade: 15, valorUnitario: 120.00 }
];

fs.writeFileSync('materiais.json', JSON.stringify(materiais, null, 2), 'utf-8');
console.log('Arquivo materiais.json criado com sucesso!');