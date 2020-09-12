const list = document.querySelector('#lista-tarefas');
const itemText = document.querySelector('#texto-tarefa');

function selectItem(event) {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].style.backgroundColor = '';
  }

  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function markTask(event) {
  const cssObj = window.getComputedStyle(event.target, null);
  if (cssObj.getPropertyValue('text-decoration').indexOf('line-through') !== -1) {
    event.target.className = 'item-list';
  } else {
    event.target.className += ' completed';
  }
}

function eventList() {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', selectItem);

    itemList[index].addEventListener('dblclick', markTask);
  }
}

function addItemList() {
  let li = document.createElement('li');
  li.className = 'item-list';
  li.innerText = itemText.value;
  list.appendChild(li);
  itemText.value = '';

  eventList();
}

function clearList() {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1){
    list.removeChild(itemList[index]);
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', addItemList);

document.querySelector('#apaga-tudo').addEventListener('click', clearList);
