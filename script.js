const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');

adicionar.addEventListener('click', function () {
    let criaLista = document.createElement('li');
    criaLista.innerText = inputText.value;
    lista.appendChild(criaLista);
    inputText.value = '';
});  