function mostrarPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Profissão: ${pessoa.profissao}`);
    console.log(`Cidade: ${pessoa.cidade}`);
    if (pessoa.salario !== undefined) {
        console.log(`Salário: R$${pessoa.salario}`);
    }
}

const pessoa = {
    nome: "Arthur",
    idade: 23,
    profissao: "Desenvolvedor",
    cidade: "Ipatinga"
};

mostrarPessoa(pessoa);

console.log("================================");

pessoa.profissao = "Desenvolvedor Full Stack";
pessoa.salario = 5000;

mostrarPessoa(pessoa);
