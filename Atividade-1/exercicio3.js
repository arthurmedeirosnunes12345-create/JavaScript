const entrada = require(`readline-sync`);

const peso = entrada.questionFloat("Digite o peso da peca: ");

if (peso >=95 && peso <= 105){
    console.log("APROVADA")
}else {
    console.log("REPROVADA");
}