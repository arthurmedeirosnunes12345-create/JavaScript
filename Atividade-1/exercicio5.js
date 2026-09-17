const entrada = require("readline-sync");

const pcsPorCiclo = entrada.questionInt("Pecas produzidas por ciclos: ");

for (let ciclo = 1; ciclo <=10; ciclo++){
    const producao = ciclo * pcsPorCiclo;
    console.log(`ciclo ${ciclo}: ${producao} pecas acumuladas`);
};