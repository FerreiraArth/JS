const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
  { nome: "Webcam", preco: 70 },
];

const produtoMaisCaro = produtos.reduce((acumulador, produto) => {
    if (produto.preco > acumulador.preco) {
        return produto;
    }

    return acumulador;
});
 
console.log(`Produto mais caro: ${produtoMaisCaro.nome}\nPreço: R$ ${produtoMaisCaro.preco}`);
