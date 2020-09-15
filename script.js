//  cria a tarefa e apaga do input-box
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
btnCriarTarefa.addEventListener('click', function () {
  let textInput = document.querySelector('#texto-tarefa').value;
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = textInput;
  toDoList.appendChild(listItem);
  document.querySelector('#texto-tarefa').value = '';
// trata evento de deixar cinza e tirar
listItem.addEventListener('click', function () {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
    listItem.classList.add('selected');
  })
// trata evento de deixar riscado e tirar
listItem.addEventListener('dblclick', function () {
  if (listItem.classList.contains('completed')) {
    listItem.classList.remove('completed');
  } else {
    listItem.classList.add('completed');
  }
});
});
// trata evento limpar toda a lista
let btnClearList = document.querySelector('#apaga-tudo');
btnClearList.addEventListener('click', function () {
  toDoList.innerHTML = '';
});
// trata evento limpa apenas itens sobreescritos
let btnClearDoneList = document.querySelector('#remover-finalizados');
btnClearDoneList.addEventListener('click', function () {
  document.querySelectorAll('.completed').innerHTML = '';
});
