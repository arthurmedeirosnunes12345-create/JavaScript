const fs = require('fs');
const caminhoArquivo = 'materiais.json';

if (fs.existsSync(caminhoArquivo)) {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const materiais = JSON.parse(conteudo);

    // Variáveis acumuladoras
    let quantidadeTotalUnidades = 0;
    let valorTotalEstoque = 0;

    console.log('=== RELATÓRIO DE ESTOQUE DE MATÉRIA-PRIMA ===\n');

    // Processa item por item
    materiais.forEach(item => {
        const valorEmEstoqueItem = item.quantidade * item.valorUnitario;

        // Acumula os totais gerais
        quantidadeTotalUnidades += item.quantidade;
        valorTotalEstoque += valorEmEstoqueItem;

        // Exibe os dados formatados de cada item
        console.log(item.descricao);
        console.log(`Quantidade: ${item.quantidade}`);
        console.log(`Valor unitário: R$ ${item.valorUnitario.toFixed(2)}`);
        console.log(`Valor em estoque: R$ ${valorEmEstoqueItem.toFixed(2)}`);
        console.log('-----------------------------------');
    });

    // Exibe os totais finais solicitados nos requisitos
    console.log(`Tipos de materiais cadastrados: ${materiais.length}`);
    console.log(`Quantidade total de unidades: ${quantidadeTotalUnidades}`);
    console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);

} else {
    console.log(`Erro: O arquivo "${caminhoArquivo}" não foi encontrado. Execute o gerador primeiro.`);
}