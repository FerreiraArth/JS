const pessoas = [
  {
    nome: "Arthur",
    idade: 23,
    profissao: "Desenvolvedor",
    cidade: "Ipatinga",
  },
  {
    nome: "Rany",
    idade: 25,
    profissao: "Designer",
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Lucas",
    idade: 17,
    profissao: "estudante",
    cidade: "São Paulo",
  },
];

function mostrarPessoa(dados) {
  dados.forEach(({ nome, idade, profissao, cidade }) => {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Profissão: ${profissao}`);
    console.log(`Cidade: ${cidade}`);
    console.log("--------------------");
  });
}

function criarResumo(pessoas) {
  return pessoas.map(({ nome, profissao }) => {
    return {
      nome,
      profissao,
    };
  });
}

const resumos = criarResumo(pessoas);
console.table(resumos);
