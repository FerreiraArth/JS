function listarContatos(contatos) {
  for (let i = 0; i < contatos.length; i++) {
    console.log(`Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}`);
  }
}

function buscarContato(contatos, nome) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
          console.log(`Contato encontrado: Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}`);
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
    nome: "jose",
    telefone: "98888-8888",
  },
];

amigos.push({
  nome: "João",
  telefone: "97777-7777",
});

listarContatos(amigos);
console.log("================================");

// amigos.pop(); // Remove o último contato adicionado
// listarContatos(amigos);

console.log("================================");

buscarContato(amigos,"Maria");