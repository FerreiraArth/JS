const nota = 7;

console.log("Sua nota é: " + nota);

if (nota >= 9) {
    console.log("Excelente! Você tirou uma nota muito boa.");
} else if (nota >= 7) {
    console.log("Aprovado! Você passou com uma nota razoável.");
} else if (nota > 5) {
    console.log("Recuperação! Você precisa melhorar.");
} else {
    console.log("Reprovado! Você não atingiu a nota mínima.");
}