const funcionarios = [
  { nome: "Arthur", idade: 23, setor: "TI", salario: 3500, ativo: true },
  { nome: "Rany", idade: 25, setor: "Design", salario: 4200, ativo: true },
  { nome: "Lucas", idade: 17, setor: "TI", salario: 1800, ativo: false },
  { nome: "Maria", idade: 30, setor: "RH", salario: 6000, ativo: true },
];

function filtrarFuncionarioAtivo(funcionarios) {
  const status = funcionarios.filter(({ ativo }) => ativo);
  return status;
}

function criarResumo(dados) {
  return dados.map(({ nome, salario }) => {
    return {
      nome,
      salario,
    };
  });
}

const funcionariosAtivos = filtrarFuncionarioAtivo(funcionarios);
const resumo = criarResumo(funcionariosAtivos);
const total = funcionariosAtivos.reduce(
  (acc, funcionario) => acc + funcionario.salario,
  0,
);

console.table(resumo);
console.log(total);
