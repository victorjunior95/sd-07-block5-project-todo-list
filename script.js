const createButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

createButton.addEventListener('click', function() {
    const newLine = document.createElement('li');
    list.appendChild(newLine);
    newLine.innerHTML = document.querySelector('input').value; // add nova tarefa
    document.querySelector('input').value = '';
});