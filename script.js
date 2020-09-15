const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa'); // botão
const listaTarefas = document.getElementById('lista-tarefas');


criarTarefa.addEventListener('click', function(){
    let novoLi = document.createElement('li');
    novoLi.textContent = textoTarefa.value;
    listaTarefas.appendChild(novoLi);
    textoTarefa.value = '';

});