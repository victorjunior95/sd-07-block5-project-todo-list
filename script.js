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
});

// Pintando intens da lista de cinza
listaTarefas.addEventListener("click", function (event) {
  if (document.getElementsByClassName("selected")[0]==undefined){
    event.target.classList.add("selected");
  } else {
    let itemARemover = document.getElementsByClassName("selected")[0];
    itemARemover.classList.remove("selected");
    event.target.classList.add("selected")
  }
});

console.log(arrayListaComTodasTarefas);