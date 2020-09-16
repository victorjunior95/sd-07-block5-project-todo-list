const inputTextToDo = document.querySelector('.texto-tarefa');
const buttonCreateToDo = document.querySelector('.criar-tarefa');
const olToDoList = document.querySelector('.lista-tarefas');

function clearInputTextToDo() {
  inputTextToDo.value = '';
}

buttonCreateToDo.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerText = inputTextToDo.value;
  olToDoList.appendChild(li);
  clearInputTextToDo();
});

const liCount = olToDoList.children;

for (let index = 0; index < liCount.length; index += 1) {
    liCount[index].addEventListener('click', function (event) {
    liCount[index].style.backgroundColor = 'rgb(128, 128, 128)'
    for (let j = 0; j < liCount.length; j += 1) {
        if (liCount[j] !== event.target) {
            liCount[j].style.backgroundColor = ''
        }
    }
  })
  
}
