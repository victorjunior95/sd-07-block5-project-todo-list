const inputText = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', function () {
  const elementList = document.createElement('li');
  list.appendChild(elementList);
  elementList.innerText = inputText.value;
  inputText.value = '';
});
