const textoTarefa = document.getElementById("texto-tarefa");
const botaoCriarTarefa = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
let arrayListaComTodasTarefas = [];

// Adicionando itens na lista, apagando o campo de preenchimento
botaoCriarTarefa.addEventListener("click", function () {
  let itemParaAdicionar = document.createElement("li");
  itemParaAdicionar.classList.add("lista");
  itemParaAdicionar.innerText = textoTarefa.value;
  arrayListaComTodasTarefas.push(itemParaAdicionar.innerText);
  listaTarefas.appendChild(itemParaAdicionar);
  textoTarefa.value = "";
  textoTarefa.focus();
});

// Pintando intens da lista de cinza
listaTarefas.addEventListener("click", function (event) {
  let itemARemover = document.getElementsByClassName("selected")[0];
  if (document.getElementsByClassName("selected")[0] != null) {
    itemARemover.classList.remove("selected");
  } 
  event.target.classList.add("selected");
});

// Riscando os itens
console.log(arrayListaComTodasTarefas);
