const backgroundColor = 'rgb(128, 128, 128)';
const getItensList = document.getElementsByTagName('li');
const comparedClass = 'completed';

function AddItemList(item) {
  const itemList = document.createElement('li');
  itemList.innerText = item;
  return itemList;
}

function clearInputValue(item) {
  item.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', function () {
  const item = document.getElementById('texto-tarefa');
  const itemList = AddItemList(item.value);

  const orderList = document.getElementById('lista-tarefas');
  orderList.appendChild(itemList);
  clearInputValue(item);
});

function chanceBackgroundColorItemList(boolean, itensList) {
  if (boolean) {
    itensList.style.backgroundColor = backgroundColor;
  }
}

function checkIfExistItemSelectedInList(itensList) {
  for (let index = 0; index < itensList.length; index += 1) {
    if (itensList[index].style.backgroundColor === backgroundColor) {
      return false;
    }
  }
  return true;
}

document.getElementById('lista-tarefas').addEventListener('click', function (event) {
  const resultCheck = checkIfExistItemSelectedInList(getItensList);
  chanceBackgroundColorItemList(resultCheck, event.target);
});

function existClassCompleted(itemList) {
  const comparedClass = 'completed';
  if (itemList.getAttribute('class') === comparedClass) {
    return true;
  }
  return false;
}

function addClasseCompleted(itemList) {
  itemList.className = comparedClass;
}

function removeClasseCompleted(itemList) {
  itemList.classList.remove(comparedClass);
}
document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
  const resultBoolean = existClassCompleted(event.target);
  if (resultBoolean) {
    removeClasseCompleted(event.target);
  } else addClasseCompleted(event.target);
});
