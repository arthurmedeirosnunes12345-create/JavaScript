const fs = require('fs');
const caminhoArquivo = 'temperaturas.json';

try {
    // 1. Tenta ler e converter o arquivo
    if (!fs.existsSync(caminhoArquivo)) {
        throw new Error(`O arquivo "${caminhoArquivo}" não foi encontrado!`);
    }

    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const temperaturas = JSON.parse(conteudo);

    // 2. Percorre as temperaturas e valida os limites
    temperaturas.forEach(temp => {
        if (temp <= 350) {
            console.log(`Leitura: ${temp}°C - NORMAL`);
        } else {
            // Interrompe o fluxo normal e lança uma exceção imediata
            throw new Error(`Temperatura de ${temp}°C excedeu o limite permitido.`);
        }
    });

} catch (erro) {
    // 3. Captura qualquer erro lançado dentro do bloco try
    console.log('\nALARME:');
    console.log(erro.message);
}