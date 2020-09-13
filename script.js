const list = document.querySelector('#lista-tarefas');
const itemText = document.querySelector('#texto-tarefa');

function selectItem(event) {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].style.backgroundColor = '';
  }

  event.style.backgroundColor = 'rgb(128, 128, 128)';
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
    itemList[index].addEventListener('click', function () {
      selectItem(itemList[index])
    });

    itemList[index].addEventListener('dblclick', markTask);
  }
}

function addItemList() {
  const li = document.createElement('li');
  li.className = 'item-list';
  li.innerText = itemText.value;
  list.appendChild(li);
  itemText.value = '';

  eventList();
}

function clearList() {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1) {
    list.removeChild(itemList[index]);
  }
}

function changeItem(event) {
  const itemList = document.querySelectorAll('.item-list');
  let change = 0;

  for (let index = 0; index < itemList.length; index += 1) {
    const cssObj = window.getComputedStyle(itemList[index], null);

    if (event.target.id === 'remover-finalizados') {
      if (cssObj.getPropertyValue('text-decoration').indexOf('line-through') !== -1) {
        list.removeChild(itemList[index]);
      }
    } else {
      if (cssObj.getPropertyValue('background-color') === 'rgb(128, 128, 128)') {

        if (event.target.id === 'remover-selecionado') {
          list.removeChild(itemList[index]);
        }

        if (event.target.id === 'mover-cima' && change === 0 && index > 0) {
          const swap = itemList[index].innerText;
          itemList[index].innerText = itemList[index].previousElementSibling.innerText;
          itemList[index].style.backgroundColor = '';
          itemList[index].previousElementSibling.innerText = swap;
          itemList[index].previousElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
          change = 1;
        }

        if (event.target.id === 'mover-baixo' && change === 0 && index < itemList.length-1) {
          const swap = itemList[index].innerText;
          itemList[index].innerText = itemList[index].nextElementSibling.innerText;
          itemList[index].style.backgroundColor = '';
          itemList[index].nextElementSibling.innerText = swap;
          itemList[index].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
          change = 1;
        }
      }
    }
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', addItemList);

document.querySelector('#texto-tarefa').addEventListener('change', addItemList);

document.querySelector('#mover-cima').addEventListener('click', changeItem);

document.querySelector('#mover-baixo').addEventListener('click', changeItem);

document.querySelector('#remover-finalizados').addEventListener('click', changeItem);

document.querySelector('#remover-selecionado').addEventListener('click', changeItem);

document.querySelector('#apaga-tudo').addEventListener('click', clearList);
