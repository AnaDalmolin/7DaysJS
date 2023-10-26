const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End'): ", (area) => {
  if (area === 'Front-End') {
    rl.question("Você quer aprender React ou Vue? (Digite 'React' ou 'Vue'): ", (frontend) => {
      console.log(`Você escolheu se especializar em ${frontend}.`);
      rl.question("Você quer continuar se especializando ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack'): ", (choice) => {
        console.log(`Você escolheu ${choice}.`);
        if (choice === 'Especializar') {
          askSpecializations();
        } else if (choice === 'Fullstack') {
          console.log("Ótima escolha, agora você é um Fullstack Developer!");
          rl.close();
        } else {
          console.log("Escolha inválida.");
          rl.close();
        }
      });
    });
  } else if (area === 'Back-End') {
    rl.question("Você quer aprender C# ou Java? (Digite 'C#' ou 'Java'): ", (backend) => {
      console.log(`Você escolheu se especializar em ${backend}.`);
      rl.question("Você quer continuar se especializando ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack'): ", (choice) => {
        console.log(`Você escolheu ${choice}.`);
        if (choice === 'Especializar') {
          askSpecializations();
        } else if (choice === 'Fullstack') {
          console.log("Ótima escolha, agora você é um Fullstack Developer!");
          rl.close();
        } else {
          console.log("Escolha inválida.");
          rl.close();
        }
      });
    });
  } else {
    console.log("Escolha inválida.");
    rl.close();
  }
});

function askSpecializations() {
  rl.question("Digite a tecnologia na qual você gostaria de se especializar (ou 'ok' para encerrar): ", (tech) => {
    if (tech === 'ok') {
      console.log("Encerrando seleção de especializações.");
      rl.close();
    } else {
      console.log(`Ótima escolha, você está se especializando em ${tech}.`);
      askSpecializations();
    }
  });
}
