const fs = require("fs");
const caminhoArquivo = 'equipamentos.json';

if (fs.existsSync(CaminhoArquivo)){

    const conteudo = fs.readFileSync(CaminhoArquivo,'utf-8');

    const equipamentos = JSON.parse(conteudo);

    console.log('--- Dados Recuperados do Arquivo ---');
    console.log(equipamentos);

} else {
    console.log(`Erro : o Arquivo "${CaminhoArquivo} nao foi encontrado! Execute o exercício anterior primeiro0 `);
}