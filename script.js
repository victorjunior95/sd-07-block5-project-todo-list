const inputText = document.getElementById('texto-tarefa');
const doList = document.getElementById('lista-tarefas');
const lineList = document.getElementsByTagName('li');
const buttonCreatTask = document.getElementById('criar-tarefa');

function backgroundSelected() {
  for (let index = 0; index < lineList.length; index += 1) {
    lineList[index].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128';
}

function taskDone() {
  if (this.className == '') {
    this.className = 'completed';
  } else {
    this.className = '';
  }
}

function addList() {
  const listLine = document.createElement('li');
  doList.appendChild(listLine);
  listLine.addEventListener('click', backgroundSelected);
  listLine.addEventListener('dblclick', taskDone);
  listLine.innerText = inputText.value;
  inputText.value = '';
}

buttonCreatTask.addEventListener('click', addList);


