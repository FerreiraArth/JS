const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
];

const produtosComDesconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        precoComDesconto: produto.preco * 0.9,
        categoria: produto.preco >= 500 ? "Premium" : produto.preco >= 100 ? "Intermediário" : "Básico",
    };
});

console.table(produtosComDesconto);