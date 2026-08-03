const opcao = 3;
const quantidade = 2;
let total = 0;
let valor = 0;

console.log("Escolha uma opção:");
console.log("1 - Pizza: R$25");
console.log("2 - Hambúrguer: R$15");
console.log("3 - Salada: R$10");
console.log("4 - Refrigerante: R$5");
console.log("5 - Sorvete: R$8");

console.log("================================");

switch (opcao) {
    case 1:
        valor = 25;
        console.log("Você escolheu Pizza.");
        console.log(`Valor: R$${valor}`);
        break;
    case 2:
        valor = 15;
        console.log("Você escolheu Hambúrguer.");
        console.log(`Valor: R$${valor}`);
        break;
    case 3:
        valor = 10;
        console.log("Você escolheu Salada.");
        console.log(`Valor: R$${valor}`);
        break;
    case 4:
        valor = 5;
        console.log("Você escolheu Refrigerante.");
        console.log(`Valor: R$${valor}`);
        break;
    case 5:
        valor = 8;
        console.log("Você escolheu Sorvete.");
        console.log(`Valor: R$${valor}`);
        break;
    default:
        console.log("Opção inválida.");
}

total = valor * quantidade;
console.log (`Total a pagar: R$${total}`);