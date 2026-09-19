const carrinhoMaria = [
  { produto: "Mouse", preco: 50, quantidade: 2 },
  { produto: "Teclado", preco: 100, quantidade: 1 },
  { produto: "Monitor", preco: 400, quantidade: 1 },
  { produto: "Headset", preco: 200, quantidade: 2 },
];

const carrinhoJose = [
  { produto: "Mouse", preco: 50, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
  { produto: "Monitor", preco: 700, quantidade: 3 },
  { produto: "Headset", preco: 200, quantidade: 2 },
];

const carrinhoPedro = [
  { produto: "Mouse", preco: 50, quantidade: 1 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
  { produto: "Monitor", preco: 300, quantidade: 1 },
  { produto: "Headset", preco: 200, quantidade: 1 },
];

function calcularCompra(carrinho) {
  const subtotal = carrinho.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0,
  );
  const itens = carrinho.reduce((acc, produto) => acc + produto.quantidade, 0);

  const frete = itens >= 5 ? 0 : 50;
  

  const desconto = subtotal >= 1000 ? subtotal * 0.1 : 0;

  const totalFinal = frete + subtotal - desconto;

  return {
    subtotal,
    desconto,
    quantidadeDeItens: itens,
    frete,
    total: totalFinal,
  };
}

function mostrarResumoCompra(compra) {
  console.log(`Subtotal: R$ ${compra.subtotal.toFixed(2)}`);
  console.log(`Desconto: R$ ${compra.desconto.toFixed(2)}`);
  console.log(`Quantidade de itens: ${compra.quantidadeDeItens}`);

  if (compra.frete === 0) {
    console.log("Parabéns! Você ganhou frete grátis!");
  } else {
    console.log(`Frete: R$ ${compra.frete.toFixed(2)}`);
  }

  console.log(`Total: R$ ${compra.total.toFixed(2)}`);
}

const maria = calcularCompra(carrinhoMaria);
const jose = calcularCompra(carrinhoJose);
const pedro = calcularCompra(carrinhoPedro);

mostrarResumoCompra(maria);
console.log("--------------------");
mostrarResumoCompra(jose);
console.log("--------------------");
mostrarResumoCompra(pedro);
