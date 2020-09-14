let list = document.getElementById('lista-tarefas');

function addElement() {
  let textInput = document.getElementById('texto-tarefa');
  tarefaDigitada = textInput.value;
  let elementList = document.createElement('li');
  list.appendChild(elementList);
  elementList.textContent = tarefaDigitada;
  textInput.value = '';
}

let buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', addElement);