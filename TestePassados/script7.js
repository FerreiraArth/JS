const numero1 = 20;
const numero2 = 10;
const operacao = "/";

if (numero2 === 0 && operacao === "/") {
    console.log("Não é possível dividir por zero.");
} else if (operacao === "+") {
    resultado = numero1 + numero2;
    console.log(`O resultado da soma é: ${resultado}`);
} else if (operacao === "-") {
    resultado = numero1 - numero2;
    console.log(`O resultado da subtração é: ${resultado}`);
} else if (operacao === "*") {
    resultado = numero1 * numero2;
    console.log(`O resultado da multiplicação é: ${resultado}`);
} else if (operacao === "/") {
    resultado = numero1 / numero2;
    console.log(`O resultado da divisão é: ${resultado}`);
} else {
    console.log("Operação inválida.");
}
