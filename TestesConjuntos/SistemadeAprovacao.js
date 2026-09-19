const pedidos = [
  { cliente: "Maria", valor: 850, pago: true },
  { cliente: "José", valor: 1200, pago: false },
  { cliente: "Pedro", valor: 450, pago: true },
  { cliente: "Ana", valor: 1500, pago: true },
];

function verificarPedidos(pedidos) {
  const pedidosAprovados = pedidos.filter(
    (pedido) => pedido.pago && pedido.valor >= 1000,
  );
  return pedidosAprovados;
}

const pedidosAprovados = verificarPedidos(pedidos).map((pedido) => {
  return {
    cliente: pedido.cliente,
    valor: pedido.valor,
  };
});

console.table(pedidosAprovados);
