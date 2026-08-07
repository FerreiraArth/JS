function calcularArea(largura, altura) {
    return largura * altura;
}

const terreno = [
    [5, 10],
    [70, 20],
    [4, 15],
    [8, 12]
];

for (let i = 0; i < terreno.length; i++) {
    const largura = terreno[i][0];
    const altura = terreno[i][1];
    const area = calcularArea(largura, altura);
    console.log(`A área do retângulo é: ${area} m²`);
}