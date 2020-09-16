const listaTarefas = document.getElementById("lista-tarefas"); 
const textoTarefa = document.getElementById("texto-tarefa");
const btnCriarTarefa = document.getElementById("criar-tarefa");
const apagaTudo = document.getElementById("apaga-tudo")
const salvarTarefas = document.getElementById('#salvar-tarefas');


btnCriarTarefa.addEventListener('click', addProduto);
    

function addProduto() {
    var item = '<li>' + textoTarefa.value + '</li>';
    listaTarefas.innerHTML += item;
    textoTarefa.value = '';
    textoTarefa.focus();
};



apagaTudo.addEventListener('click', function () {
    listaTarefas.innerHTML = '';
  });

