const prompt = require("prompt-sync")();

var operacao = prompt("Qual operação vocês deseja? ");
var valor01 = prompt("Valor 01? ");
var valor02 = prompt("Valor 02? ");

function soma(){
    resultado = valor01 + valor02
    console.log("Total: " + resultado)
}

function divisao(){
    resultado = valor01 / valor02
    console.log("Total: " + resultado)
}

function subtracao(){
    resultado = valor01 - valor02
    console.log("Total: " + resultado)
}

function multiplicacao(){
    resultado = valor01 * valor02
    console.log("Total: " + resultado)
}

if(operacao === "soma"){
    soma();
}else if(operacao === "divisao"){
    divisao()
}else if(operacao === "subtracao"){
    subtracao()
}else if(operacao === "multiplicacao"){
    multiplicacao()
}