const listaOrdenada = document.querySelector("#lista-tarefas");
const botaoAdicionar = document.querySelector("#criar-tarefa");
const campoTexto = document.querySelector("#texto-tarefa");

botaoAdicionar.addEventListener("click", function () {
  let itemTarefa = document.createElement("li");
  itemTarefa.innerText = campoTexto.value;
  itemTarefa.className = "tarefa";
  listaOrdenada.appendChild(itemTarefa);
  campoTexto.value = "";
  campoTexto.focus();
  itemTarefa.addEventListener("click", function () {    
    let selecionado = document.querySelector(".selecao");
    if (selecionado !== null) {
      selecionado.classList.remove("selecao");
    }
    itemTarefa.classList.add("selecao");
  });
});

