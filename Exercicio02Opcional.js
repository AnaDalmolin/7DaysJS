const prompt = require("prompt-sync")();

var linguagem = "JavaScript";

var resposta = prompt("Você gosta de estudar" + linguagem +"? Responda com o número 1 para SIM ou 2 para NÃO.");

    if(resposta == 1){
        console.log("Muito bom! Continue estudando e você terá muito")
    }else{
        console.log("Ahh que pena... Já tentou aprender outras linguagens?")
    }

//"node Exercicio02Opcional.js"