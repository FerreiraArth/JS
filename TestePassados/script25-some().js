const pedidos = [
  { cliente: "Maria", valor: 850, pago: true },
  { cliente: "José", valor: 1200, pago: false },
  { cliente: "Pedro", valor: 450, pago: true },
  { cliente: "Ana", valor: 1500, pago: true },
];

function verificarPedidos(pedidos) {
  const resultado = pedidos.some((pedido) => pedido.pago && pedido.valor >= 1000,);

  return resultado;
}

const existePedidoGrandePago = verificarPedidos(pedidos);

console.log(existePedidoGrandePago);