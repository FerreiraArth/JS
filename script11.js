const linguagens = ["Java", "JavaScript", "Python", "C", "SQL"];
const quantidade = linguagens.length;

console.log(`Primeira linguagem é: ${linguagens[0]}`);
console.log(`Última linguagem é: ${linguagens[quantidade - 1]}`);
console.log(`Quantidade de linguagens: ${quantidade}`);

console.log("================================");

for (let i = 0; i < quantidade; i++) {
    console.log(`A linguagem ${linguagens[i]} está na posição ${i}`);
}

console.log("================================");

for (let i = 0; i < quantidade; i++) {
    console.log(`${i + 1} - ${linguagens[i]}`);
}