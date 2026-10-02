const fs = require('fs');

const medições = [180, 250, 310, 390, 200];

fs.writeFileSync('temperaturas.json', JSON.stringify(medições, null, 2), 'utf-8');
console.log('Arquivo temperaturas.json criado com sucesso!');