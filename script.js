const textInput = document.querySelector('#texto-tarefa');
const buttonMake = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function removeOldSelected() {
  const itensArray = todoList.children;
  for (let index = 0; index < itensArray.length; index += 1) {
    itensArray[index].style.backgroundColor = 'white';
  }
};

buttonMake.addEventListener('click', function () {
  const liElement = document.createElement('li');
  liElement.innerText = textInput.value;
  liElement.className = 'lista-item';
  todoList.appendChild(liElement);
  textInput.value = '';
});

todoList.addEventListener('click', function (event) {
  removeOldSelected();
  if (event.target.className === 'lista-item') {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
