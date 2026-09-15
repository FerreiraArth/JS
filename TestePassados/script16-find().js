function listarContatos(contatos) {
  for (let i = 0; i < contatos.length; i++) {
    console.log(`Nome: ${contatos[i].nome}, Telefone: ${contatos[i].telefone}`);
  }
}

function buscarContato(contatos, pessoa) {
    const busca = contatos.find(contato => contato.nome === pessoa);
    if (!busca) {
    console.log(`Contato com o nome "${pessoa}" não encontrado.`);
  } else {
    console.log(`Contato encontrado: Nome: ${busca.nome}, Telefone: ${busca.telefone}`);
  }
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

const familia = [
  {
    nome: "Raniely",
    telefone: "96666-6666",
  },
];

amigos.push({
  nome: "Maria",
  telefone: "97777-7777",
});


listarContatos(amigos);
console.log("================================");

buscarContato(amigos, "Maria");
buscarContato(amigos, "Jose");
buscarContato(amigos, "Arthur");
buscarContato(familia, "Raniely");