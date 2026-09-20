const funcionarios = [
  { nome: "Arthur", idade: 23, setor: "TI", salario: 3500, ativo: true },
  { nome: "Rany", idade: 21, setor: "Design", salario: 4200, ativo: true },
  { nome: "Lucas", idade: 17, setor: "TI", salario: 1800, ativo: true },
  { nome: "Maria", idade: 30, setor: "RH", salario: 6000, ativo: true },
  { nome: "Diego", idade: 26, setor: "TI", salario: 4000, ativo: true },
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

const setores = funcionarios.reduce((acc, { setor }) => {
  if (acc[setor]) {
    acc[setor] += 1;
  } else {
    acc[setor] = 1;
  }

  return acc;
}, {});

const salariosPorSetor = funcionarios.reduce((acc, { setor, salario }) => {
  if (acc[setor]) {
    acc[setor] += salario;
  } else {
    acc[setor] = salario;
  }
  return acc;
}, {});

console.table(salariosPorSetor);
// console.table(resumo);
// console.log(total);
// console.table(setores);
