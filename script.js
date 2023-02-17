import redlineSync from 'readline-sync';
import chalk from 'chalk';

const listandoProps = [];
let resp = "";

const adicionando = (prop) => {
  listandoProps.push(prop);
};

const ordenando = () => {
  listandoProps.sort();
};

const listando = () => {
  listandoProps.forEach((elemento)=> { console.log(`• ${elemento}`); });
};

while (true) {
  resp = redlineSync.question(chalk.yellow("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: "));

  if (resp.toLowerCase() == "sair") {
    console.log(chalk.bgRed('Lista Ordenada de Propriedades CSS: '));
    ordenando();
    listando();
    console.log(chalk.red('---------------------------------X---------------------------------'));
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicionando(resp);
  }
}