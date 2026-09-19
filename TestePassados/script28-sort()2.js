const pedidos = [
  { cliente: "Maria", valor: 850, pago: true },
  { cliente: "José", valor: 1200, pago: false },
  { cliente: "Pedro", valor: 450, pago: true },
  { cliente: "Ana", valor: 1500, pago: true },
];

function organizarPedidos(pedidos) {
  return [...pedidos].sort((a, b) => a.valor - b.valor);
}

const copiaPedidos = [...pedidos].sort((a, b) => a.valor - b.valor);

const pedidosOrganizados = organizarPedidos(pedidos);

console.table(pedidosOrganizados);
console.table(copiaPedidos);
console.table(pedidos);
