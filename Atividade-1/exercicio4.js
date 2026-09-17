const entrada = require(`readline-sync`);

const temperatura = entrada.questionFloat("Digite a temperatura da maquina: ");

if(temperatura<=60){
    console.log("NORMAL")

}else if (temperatura>60 && temperatura<=80 ){
    console.log("ATENCAO!");
}else{ 
    console.log("Critica!!");
    
}