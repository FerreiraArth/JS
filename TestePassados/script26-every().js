const pedidos = [
  { cliente: "Maria", valor: 850, pago: true },
  { cliente: "José", valor: 1200, pago: false },
  { cliente: "Pedro", valor: 450, pago: true },
  { cliente: "Ana", valor: 1500, pago: true },
];

function verificarPedidos(pedidos) {
  return pedidos.every((pedido) => pedido.pago);
}
function verificarPedidosMedio(pedidos) {
  return pedidos.every((pedido) => pedido.valor >= 400);
}

const todosPedidosEstaoPagos = verificarPedidos(pedidos);
const todosPedidosSaoMaioresQue400 = verificarPedidosMedio(pedidos);
  
console.log(todosPedidosEstaoPagos);
console.log(todosPedidosSaoMaioresQue400);