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


function removerItem(lista, item) {

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === item) {
            lista.splice(lista[i], 1);
        }else{
            console.log("Item não existe na lista!")
        }
        
    }    
}


if (doces.length === 0 && frutas.length === 0 && congelado.length === 0 && laticinio.length === 0 && outros.length === 0) {

    console.log("Lista de compras está vazia");

}else{

    var resposta2 = prompt("você deseja remover algum dos itens de sua lista");

    if (resposta2 === "sim") {

        var listaRemove = prompt("Em qual das lista deseja remover?");
        var itemRemove = prompt("E qual dos itens deseja remover?");

        if(listaRemove === "doces"){
            removerItem(doces, itemRemove)
        }else if(listaRemove === "frutas"){
            removerItem(frutas, itemRemove)
        }else if(listaRemove === "congelados"){
            removerItem(congelado, itemRemove)
        }else if(listaRemove === "laticinio"){
            removerItem(laticinio, itemRemove)
        }else if(listaRemove === "outros"){
            removerItem(outros, itemRemove)
        }
    }
}

