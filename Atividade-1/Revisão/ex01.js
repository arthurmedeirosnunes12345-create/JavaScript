const entrada = require("readline-sync");

const temperatura = entrada.questionFloat(" Digite a temperatura: ");

if (temperatura <= 60){
    console.log(`A temperatura ${temperatura} C está NORMAL`)
}else if (temperatura <=80){
    console.log(`A temperatura ${temperatura} C precisa de ATENCAO`) 
}else{
    console.log(` A temperatura ${temperatura} C é CRITICA!!`);
};