//  cria a tarefa e apaga do input-box
const btnNewItem = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
btnNewItem.addEventListener('click', function () {
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
// remove itens com check
let btnClearDoneList = document.querySelector('#remover-finalizados');
btnClearDoneList.addEventListener('click', function () {
  let listItens = document.querySelectorAll('li');
  for(let index = 0; index < listItens.length; index += 1) {
    let listCheck = listItens[index];
    if (listCheck.classList.contains('completed')){
      toDoList.removeChild(listCheck);
    }
  }
});

// trata evento salvar lista
let btnSaveList = document.querySelector('#salvar-tarefas');
btnSaveList.addEventListener('click', function () {
  localStorage.setItem('finalList', toDoList);
});
});
// trata evento limpar toda a lista
let btnClearList = document.querySelector('#apaga-tudo');
btnClearList.addEventListener('click', function () {
  toDoList.innerHTML = '';
});
// recuperar lista salva 
if (toDoList.length !== 0) {
  window.onload = function () {
    localStorage.getItem('toDoList');
  }
};


