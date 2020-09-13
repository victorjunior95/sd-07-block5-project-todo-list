const textInput = document.querySelector('#texto-tarefa');
const buttonMake = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function removeOldSelected() {
  const itensArray = todoList.children;
  for (let index = 0; index < itensArray.length; index += 1) {
    itensArray[index].style.backgroundColor = 'white';
  }
}

buttonMake.addEventListener('click', function () {
  const liElement = document.createElement('li');
  liElement.innerText = textInput.value;
  todoList.appendChild(liElement);
  textInput.value = '';
});

todoList.addEventListener('click', function (event) {
  removeOldSelected();
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

todoList.addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
      console.log(event.target);
  }
});
