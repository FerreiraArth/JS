function listarPessoas(contatos) {
  contatos.forEach((contato) => {
    console.log(`${contato.nome} - ${contato.idade} anos`);
  });
}

function filtrarPorIdade(contatos, idadeMinima) {
  const contatosFiltrados = contatos.filter(
    (contato) => contato.idade >= idadeMinima,
  );
  return contatosFiltrados;
}

const pessoas = [
  { nome: "Arthur", idade: 23 },
  { nome: "Maria", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Jose", idade: 30 },
];

listarPessoas(pessoas);
console.log("================================");

const pessoasAdultas = filtrarPorIdade(pessoas, 18);
listarPessoas(pessoasAdultas);

const pessoasComAno = pessoasAdultas.map((pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
    anoNascimento: 2026 - pessoa.idade,
  };
});

console.log(pessoasComAno);
