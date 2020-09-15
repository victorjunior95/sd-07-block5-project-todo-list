function changeBgColor() {
  return event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

function createTask() {
  const task = document.getElementById('texto-tarefa').value;
  let newTask = document.createElement('li');
  newTask.addEventListener('click', changeBgColor);
  newTask.innerText = task;
  document.getElementById('texto-tarefa').value = "";
  return document.getElementById('lista-tarefas').appendChild(newTask);
}

window.onload = function () {

document.getElementById('criar-tarefa').addEventListener('click', createTask);

};
