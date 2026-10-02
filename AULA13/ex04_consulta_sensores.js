const fs = require('fs');
const caminhoArquivo = 'monitoramento.json';

if (fs.existsSync(caminhoArquivo)) {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const sensores = JSON.parse(conteudo);

    // 1. Exibe todos os sensores
    console.log('=== TODOS OS SENSORES ===');
    sensores.forEach(sensor => {
        console.log(`[${sensor.codigo}] ${sensor.tipo}: ${sensor.valor} ${sensor.unidade} | Status: ${sensor.status}`);
    });

    // 2. Filtra e exibe somente os sensores com status "Alerta"
    console.log('\n=== SENSORES EM ALERTA ===');
    let totalAlerta = 0;

    sensores.forEach(sensor => {
        if (sensor.status === 'Alerta') {
            console.log(`[${sensor.codigo}] ${sensor.tipo} - Valor atual: ${sensor.valor} ${sensor.unidade}`);
            totalAlerta++;
        }
    });

    // 3. Informa o total de alertas
    console.log(`\nTotal de sensores em alerta: ${totalAlerta}`);

} else {
    console.log(`Erro: O arquivo "${caminhoArquivo}" não existe. Execute primeiro o programa de gravação.`);
}