const prompt = require("prompt-sync")();

const doces = [];
const frutas = [];
const congelado = [];
const laticinio = [];


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
    }
}


// // Crie um objeto para armazenar os itens da lista de compras por categoria
// const listaDeCompras = {
//     Frutas: [],
//     Laticínios: [],
//     Congelados: [],
//     Doces: [],
//     Outros: [],
//   };
  
//   // Função para adicionar um item à lista de compras
//   function adicionarItem() {
//     const resposta = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");
  
//     if (resposta.toLowerCase() === "sim") {
//       const comida = prompt("Digite o nome da comida:");
//       const categoria = prompt("Em qual categoria essa comida se encaixa (Frutas, Laticínios, Congelados, Doces, Outros)?");
  
//       if (listaDeCompras[categoria]) {
//         listaDeCompras[categoria].push(comida);
//       } else {
//         listaDeCompras.Outros.push(comida);
//       }
  
//       adicionarItem(); // Chama a função novamente para adicionar mais itens
//     } else {
//       exibirListaDeCompras();
//     }
//   }
  
//   // Função para exibir a lista de compras agrupada por categoria
//   function exibirListaDeCompras() {
//     console.log("Lista de compras:");
  
//     for (const categoria in listaDeCompras) {
//       const itens = listaDeCompras[categoria];
  
//       if (itens.length > 0) {
//         console.log(`    ${categoria}: ${itens.join(', ')}`);
//       }
//     }
//   }
  
//   // Iniciar o processo de adição de itens
//   adicionarItem();