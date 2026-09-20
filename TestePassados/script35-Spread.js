const pessoa = {
  nome: "Arthur",
  idade: 23,
  profissao: "Desenvolvedor",
};

const pessoaAtualizada = {
  ...pessoa,
  cidade: "Ipatinga - MG",
};

console.log(pessoa);
console.log("====================");
console.log(pessoaAtualizada);
console.log("===================="); 

const tecnologiasFront = ["HTML", "CSS", "JavaScript"];
const tecnologiasBack = ["Java", "Python", "SQL"];
const tecnologias = [...tecnologiasFront, ...tecnologiasBack];

console.log(tecnologias);
