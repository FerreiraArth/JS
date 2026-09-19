const arthur = {
  nome: "Arthur",
  idade: 23,
  profissao: "Desenvolvedor",
  cidade: "Ipatinga",
};

const rany = {
  nome: "Rany",
  idade: 25,
  profissao: "Designer",
  cidade: "Rio de Janeiro",
};

function mostrarPessoa({ nome, idade, profissao, cidade }) {

  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Profissão: ${profissao}`);
  console.log(`Cidade: ${cidade}`);
}

mostrarPessoa(arthur);
console.log("--------------------");
mostrarPessoa(rany);