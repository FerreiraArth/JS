const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Java", "Python"];

function mostrarStack(principal, ...tecnologias) {
    console.log(`Tecnologia principal: ${principal}`);
    console.log(`outras tecnologias: ${tecnologias}`)
}

mostrarStack(
  "JavaScript",
  ...frontend,
  ...backend
);