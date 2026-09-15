function listarContatos(contatos) {
  for (let i = 0; i < contatos.length; i++) {
    console.log(`Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}`);
  }
}

function buscarContato(nome) {
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].nome === nome) {
      console.log(
        `Contato encontrado: Nome: ${amigos[i].nome}, Telefone: ${amigos[i].telefone}`,
      );
      return;
    }
  }
  console.log(`Contato com o nome "${nome}" não encontrado.`);
}

const amigos = [
  {
    nome: "Arthur",
    telefone: "99999-9999",
  },
  {
    nome: "Maria",
    telefone: "98888-8888",
  },
];

listarContatos(amigos);
console.log("================================");

amigos.push({
  nome: "João",
  telefone: "97777-7777",
});

listarContatos(amigos);

// amigos.pop(); // Remove o último contato adicionado
// listarContatos(amigos);

console.log("================================");

buscarContato("Maria");
