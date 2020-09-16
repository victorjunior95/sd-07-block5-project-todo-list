const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas')

addTarefa.addEventListener('click', function () {
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    list.appendChild(elementLi);
})