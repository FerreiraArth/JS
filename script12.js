const compras = ["Arroz", "Feijão", "Macarrão"];

for (let i = 0; i < compras.length; i++) {
    console.log(`${i + 1} - ${compras[i]}`);
}

console.log("================================");

compras.push("Leite");

for (let i = 0; i < compras.length; i++) {
    console.log(`${i + 1} - ${compras[i]}`);
}

console.log("================================");

compras.pop();

for (let i = 0; i < compras.length; i++) {
    console.log(`${i + 1} - ${compras[i]}`);
}