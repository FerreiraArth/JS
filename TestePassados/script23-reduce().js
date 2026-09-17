const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
  { nome: "Webcam", preco: 70 },
];

const total = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
 
console.log(total);
