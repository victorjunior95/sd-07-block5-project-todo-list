const listaTarefas = document.getElementById("lista-tarefas"); 
const textoTarefa = document.getElementById("texto-tarefa");
const btnCriarTarefa = document.getElementById("criar-tarefa");
const apagaTudo = document.getElementById("apaga-tudo")
const salvarTarefas = document.getElementById('salvar-tarefas');


btnCriarTarefa.addEventListener('click', addProduto);
    
function addProduto() {
    var item = '<li>' + textoTarefa.value + '</li>';
    listaTarefas.innerHTML += item;
    textoTarefa.value = '';
    textoTarefa.focus();
    
};


document.querySelector('#salvar-tarefas').addEventListener('click', function () {
    localStorage.clear();
    const listaSalva = document.querySelector('ol');
    localStorage.setItem('tarefaSalva', listaSalva.innerHTML);
  });

function mostrarListaAtual() {
    document.querySelector('ol').innerHTML = localStorage.getItem('tarefaSalva');
  };
  window.onload = mostrarListaAtual;


  apagaTudo.addEventListener('click', function () {
    listaTarefas.innerHTML = '';
  });
