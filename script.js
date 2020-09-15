//criar a lista
let listaTarefas = document.querySelector('#lista-tarefas');
let criarTarefaBtn = document.querySelector('#criar-tarefa');
criarTarefaBtn.addEventListener('click', function () {
    let criarLista = document.createElement('li');
    criarLista.innerText = document.querySelector('#texto-tarefa').value;
    listaTarefas.appendChild(criarLista);
});