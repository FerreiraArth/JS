const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
  { nome: "Webcam", preco: 70 },
];

function promo(produtos, desconto) {
  const produtosComFiltro = produtos.filter(
    (produto) => produto.preco >= desconto,
  );
  return produtosComFiltro;
}

const promocao = promo(produtos, 100);

const produtosComDesconto = promocao.map((produto) => {
  return {
    nome: produto.nome,
    precoComDesconto: produto.preco * 0.9,
  };
});

console.table(produtosComDesconto);
