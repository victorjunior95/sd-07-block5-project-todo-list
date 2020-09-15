//  cria a tarefa e apaga do input-box
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
btnCriarTarefa.addEventListener('click', function () {
    let textInput = document.querySelector('#texto-tarefa').value;
    let listItem = document.createElement('li');
    listItem.className = 'listItem';
    listItem.innerHTML = textInput;
    toDoList.appendChild(listItem);
    document.querySelector('#texto-tarefa').value = '';
    changeBackground();
});

// muda de cor de fundo quando clicado
let list = document.getElementsByClassName('listItem');
function changeBackground() {
    for (let index = 0; index < list.length; index += 1) {
      list[index].addEventListener('click', function () {
      list[index].classList.add('selected');
    });
  }
}