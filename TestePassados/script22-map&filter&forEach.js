const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
  { nome: "Webcam", preco: 70 },
];

function promo(produtos, precoMinimo) {
  const produtosComFiltro = produtos.filter(
    (produto) => produto.preco >= precoMinimo,
  );
  return produtosComFiltro;
}

function listarProdutos(lista) {
  lista.forEach((produto) => {
    console.log(`Produto: ${produto.nome}\nCusta: R$ ${produto.preco} - Com desconto: R$ ${produto.precoComDesconto}`);
    console.log("--------------------------------------------------");
  });
}

const promocao = promo(produtos, 100);

const produtosComDesconto = promocao.map((produto) => {
  return {
    nome: produto.nome,
    preco: produto.preco,
    precoComDesconto: produto.preco * 0.9,
  };
});

listarProdutos(produtosComDesconto);
