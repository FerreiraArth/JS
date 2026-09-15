function listarContatos(contatos) {
  for (let i = 0; i < contatos.length; i++) {
    console.log(
      `Nome: ${contatos[i].nome}, Idade: ${contatos[i].idade}`,
    );
  }
}

function filtrarPorIdade(contatos, idadeMinima) {
  const contatosFiltrados = contatos.filter((contato) => contato.idade >= idadeMinima,);
  return contatosFiltrados;
}

const pessoas = [
  { nome: "Arthur", idade: 23 },
  { nome: "Maria", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Jose", idade: 30 },
];

listarContatos(pessoas);
console.log("================================");

const pessoasAdultas = filtrarPorIdade(pessoas, 18);
listarContatos(pessoasAdultas);