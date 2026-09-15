function listarContatos(contatos) {
  for (let i = 0; i < contatos.length; i++) {
    console.log(`Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}`);
  }
}

const busca = amigos.find(contato => contato.nome === "Maria");

if (!busca) {
  console.log(`Contato com o nome "Maria" não encontrado.`);
} else {
  console.log(`Contato encontrado: Nome: ${busca.nome}, Telefone: ${busca.telefone}`);
}

const amigos = [
  {
    nome: "Arthur",
    telefone: "99999-9999",
  },
  {
    nome: "Jose",
    telefone: "98888-8888",
  },
];

amigos.push({
  nome: "Maria",
  telefone: "97777-7777",
});

listarContatos(amigos);
console.log("================================");