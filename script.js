document.body.onload = function() {
    document.querySelector('#criar-tarefa').addEventListener('click', addToDo);
};

function addToDo() {
    const input = document.querySelector('#texto-tarefa');
    const ol = document.querySelector('ol');
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
}