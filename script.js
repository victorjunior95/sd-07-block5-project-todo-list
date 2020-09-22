const listaOrdenada = document.querySelector("#lista-tarefas");
const botaoAdicionar = document.querySelector("#criar-tarefa");
const campoTexto = document.querySelector("#texto-tarefa");
const botaoApaga = document.querySelector("#apaga-tudo");
let botaoRemoveFinalizados = document.querySelectorAll(".completed");
let remove = document.querySelector("#remover-finalizados");

// Botão adiciona tarefa
botaoAdicionar.addEventListener("click", function () {
  let itemTarefa = document.createElement("li");
  itemTarefa.innerText = campoTexto.value;
  itemTarefa.className = "tarefa";
  listaOrdenada.appendChild(itemTarefa);
  campoTexto.value = "";
  campoTexto.focus();
  // Clique seleciona/desseleciona tarefa
  itemTarefa.addEventListener("click", function () {
    let selecionado = document.querySelector(".selecao");
    if (selecionado !== null) {
      selecionado.classList.remove("selecao");
    }
    itemTarefa.classList.add("selecao");
    itemTarefa.addEventListener("click", function(){
      itemTarefa.classList.remove("selecao");
    })
  });
  
  // Duplo clique tarefa completa
  itemTarefa.addEventListener("dblclick", function () {
    itemTarefa.classList.add("completed");
    itemTarefa.classList.remove("selecao");

    // Botão remove tarefas completas
    remove.addEventListener("click", function () {
      let itensLista = document.querySelectorAll(".tarefa");
      for (let indiceItensLista = 0; indiceItensLista < itensLista.length; indiceItensLista += 1) {
        if (itensLista[indiceItensLista].classList.contains("completed")) {
          listaOrdenada.removeChild(itensLista[indiceItensLista]);
        }
      }
    });
  });
});

// Botão apaga lista de tarefas
botaoApaga.addEventListener("click", function () {
  listaOrdenada.innerHTML = "";
});
