const textInput = document.querySelector('#texto-tarefa');
const buttonMake = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

buttonMake.addEventListener('click', function () {
  const liElement = document.createElement('li');
  liElement.innerText = textInput.value;
  todoList.appendChild(liElement);
  textInput.value = '';
})
