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

function mostrarLista(lista, nome) {

    if(lista.length > 0){

        console.log(nome + ": ")
        
        for (let i = 0; i < lista.length; i++) {
            
            console.log(" -" + lista[i])
            
        }
    } 
}


console.log("###### LISTA DE COMPRAS ######")


mostrarLista(doces, "Doces")

mostrarLista(frutas, "Frutas")

mostrarLista(congelado, "Congelados")

mostrarLista(laticinio, "Laticinio")

mostrarLista(outros, "Outros")

