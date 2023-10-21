const prompt = require("prompt-sync")();

var nome = prompt("Por favor, digite seu nome:");
var idade = prompt("Por favor, digite sua idade:");
var linguagem = prompt("Por favor, digite a linguagem de programação que você está estudando:");

console.log("Óla " + nome + " você já tem " + idade + " e já está estudando " + linguagem);
