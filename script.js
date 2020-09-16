const textoTarefa = document.getElementById("texto-tarefa");
const botaoCriarTarefa = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
let arrayListaComTodasTarefas = [];

// Adicionando itens na lista, apagando o campo de preenchimento
botaoCriarTarefa.addEventListener("click", function () {
  let itemParaAdicionar = document.createElement("li");
  itemParaAdicionar.classList.add("lista");
  itemParaAdicionar.innerText = textoTarefa.value;
  console.log(itemParaAdicionar);
  arrayListaComTodasTarefas.push(itemParaAdicionar);
  listaTarefas.appendChild(itemParaAdicionar);
  textoTarefa.value = "";
  console.log(textoTarefa.value);
  for (index = 0; index < classeLista.length; classeLista += 1) {
     classeLista[index].style.backgroundColor = "yellow";
   }
});

listaTarefas.addEventListener("click", function (event) {
  let classeLista = document.getElementsByClassName("lista");
  console.log(classeLista.className);
  
  event.target.style.backgroundColor = "blue";
});
