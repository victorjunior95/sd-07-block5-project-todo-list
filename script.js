let criarTarefa = document.getElementById('criar-tarefa');
let listarTarefas = document.getElementById('lista-tarefas');
let campoToDo = document.querySelector('input');

let todos = [];

window.onload = renderizarTodos ();

function renderizarTodos () {
  for (let todo of todos) {
    let itemLista = document.createElement('li');
    listarTarefas.appendChild(itemLista).innerText = todo;
  }
}

criarTarefa.addEventListener('click', function () {
  listarTarefas.innerHTML = '';
  let novoTodo = campoToDo.value;
  todos.push(novoTodo);
  campoToDo.value = '';
  renderizarTodos();
});