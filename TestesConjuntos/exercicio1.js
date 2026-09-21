const listaDeCompras = [
  {
  item: "Arroz",
  quantidade: 2
  }
]

function mostrarLista() {
  for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`Item: ${listaDeCompras[i].item} | Quantidade: ${listaDeCompras[i].quantidade}`);
    console.log("-  -  -  -  -  -  -  -  -  -  -");
  }
}

listaDeCompras.push({
  item: "Feijão",
  quantidade: 3
});

mostrarLista();