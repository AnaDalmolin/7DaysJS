const prompt = require("prompt-sync")();

const doces = [];
const frutas = [];
const congelado = [];
const laticinio = [];
const outros = [];


var resposta = prompt("você deseja adicionar uma comida na sua lista de compras");

if(resposta === "sim"){

    var comida = prompt("Qual Comida você deseja adicionar em sua lista?");

    var lista = prompt("Qual lista você deseja adicionar está comida?");
    
    if(lista === "doces"){
        doces.push(comida)
    }else if(lista === "frutas"){
        frutas.push(comida)
    }else if(lista === "congelados"){
        congelado.push(comida)
    }else if(Lista === "laticinio"){
        laticinio.push(comida)
    }else if(Lista === "outros"){
        outros.push(comida)
    }
}


console.log("###### LISTA DE COMPRAS ######")

if(doces.length > 0){

    console.log("Doces: ")
    
    for (let i = 0; i < doces.length; i++) {
        
        console.log(" -" + doces[i])
        
    }
}

if (frutas.length > 0) {
    
    console.log("Frutas: ")
    
    for (let i = 0; i < frutas.length; i++) {
        
        console.log(" -" + frutas[i])
        
    }
}

if(congelado.length > 0){

    console.log("Congelados: ")
    
    for (let i = 0; i < congelado.length; i++) {
        
        console.log(" -" + congelado[i])
        
    }
}

if (laticinio.length > 0) {
    
    console.log("laticinio: ")
    
    for (let i = 0; i < laticinio.length; i++) {
        
        console.log(" -" + laticinio[i])
        
    }
}

if (outros.length > 0) {
    
    console.log("Outros: ")
    
    for (let i = 0; i < outros.length; i++) {
        
        console.log(" -" + outros[i])
        
    }
}
