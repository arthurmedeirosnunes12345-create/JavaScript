const fs = require('fs');

const equipamentos =[
    {
        codigo:101,
        nome:"Torno CNC",
        setor: "usinagem",
        operacional:true

    },
    {
        codigo:102,
        nome:"Prensa Hidráulica",
        setor:"Estamparia",
        operacional: false
    },
    {
        codigo:103, 
        nome: "Impressora 3D",
        setor: "Prototipagem",
        operacional:true
    }
];

const dadosJSON = JSON.stringify(equipamentos, null , 2);

fs.writeFileSync('equipamentos.json', dadosJSON,'utf-8');

console.log(" Arquivo equipamentos.json criado com sucesso!");