function createTask() {
    let task = document.getElementById('texto-tarefa').value;
    let newTask = document.createElement('li');
    newTask.innerText = task;
    document.getElementById('texto-tarefa').value = "";
    return document.getElementById('lista-tarefas').appendChild(newTask);
}

window.onload = function () {

document.getElementById('criar-tarefa').addEventListener('click', createTask);

};
