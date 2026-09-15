const saldo = 850;
const saque = 350;

if (saque <= 0) {
    console.log("Valor de saque inválido.");
} else if (saque <= saldo) {
    console.log("Saque realizado com sucesso.");
    console.log(`Saldo restante: ${saldo - saque}`);
} else {
    console.log("Saldo insuficiente.");
}