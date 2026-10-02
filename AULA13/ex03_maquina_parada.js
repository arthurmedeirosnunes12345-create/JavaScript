const fs = require("fs");

const CaminhoArquivo = "equipamentos.json";

if (fs.existsSync(CaminhoArquivo)) {

    const conteudo = fs.readFileSync(CaminhoArquivo, "utf-8");
    const equipamentos = JSON.parse(conteudo);

    let totalParados = 0;

    console.log("---Equipamentos Parados---");

    equipamentos.forEach(equipamento => { 

        if (!equipamento.operacional) {
        
            console.log(`${equipamento.nome} - ${equipamento.setor}`);
            totalParados++;
        }
    });

    console.log(`Total de equipamentos parados: ${totalParados}`);

} else {
    console.log(`Erro: O arquivo "${CaminhoArquivo}" não foi encontrado! Execute o exercício 1 primeiro.`);
}
