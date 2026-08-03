const numero1 = 18;
const numero2 = 25;

const idade = 23;
const maiorDeIdade = idade >= 18;

const maior = numero1 > numero2;
const menor = numero1 < numero2;
const maiorOuIgual = numero1 >= numero2;
const menorOuIgual = numero1 <= numero2;
const igual = numero1 === numero2;
const diferente = numero1 !== numero2;

console.log(`${numero1} > ${numero2} = ${maior}`);
console.log(`${numero1} < ${numero2} = ${menor}`);
console.log(`${numero1} >= ${numero2} = ${maiorOuIgual}`);
console.log(`${numero1} <= ${numero2} = ${menorOuIgual}`);
console.log(`${numero1} === ${numero2} = ${igual}`);
console.log(`${numero1} !== ${numero2} = ${diferente}`);

console.log(`Arthur é maior de idade? ${maiorDeIdade}`);