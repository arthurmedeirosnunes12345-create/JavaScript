const entrada = require ("readline-sync");


const NomeMaterial = entrada.question ("Digite o nome do material :");

const QtdMaterial = entrada.questionInt ("Digite a quantidade de peca : ");

const PrecoUnit = entrada.questionFloat (" Digite o preco unitario do material: ");

const total = QtdMaterial * PrecoUnit;

console.log(" === RELATORIO DE PRODUCAO === ")
console.log(`Nome do Material: ${NomeMaterial}`);
console.log(`Quantidade do Material ${QtdMaterial}`);
console.log(`Total: ${total}`);

