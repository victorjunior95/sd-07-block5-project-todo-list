const backgroundColor = 'rgb(128, 128, 128)';
const getItensList = document.getElementsByTagName('li');
const comparedClass = 'completed';
const arrayItensList = [];


function addItemListOnLocalStorage(item) {
  arrayItensList.push(item);
  localStorage.setItem('itensList', JSON.stringify(arrayItensList));
}

function addItemListInOrderList(itemList) {
  const orderList = document.getElementById('lista-tarefas');
  orderList.appendChild(itemList);
}

function createItemList(arrayItens) {
  arrayItens.forEach((item) => {
    const itemList = document.createElement('li');
    itemList.innerText = item;
    addItemListInOrderList(itemList);
    addItemListOnLocalStorage(item);
  });
}

function loadingListItemsOnLocalstorage() {
  const getArrayList = JSON.parse(localStorage.getItem('itensList'));
  createItemList(getArrayList);
}

loadingListItemsOnLocalstorage();

function clearInputValue(item) {
  item.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', function () {
  const inputItem = document.getElementById('texto-tarefa');
  const arrayItens = [inputItem.value];
  createItemList(arrayItens);
  clearInputValue(inputItem);
});

function chanceBackgroundColorItemList(boolean, itemList) {
  if (boolean) {
    itemList.style.backgroundColor = backgroundColor;
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

function deleteAllItensList(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
  const resultBoolean = existClassCompleted(event.target);
  if (resultBoolean) {
    removeClasseCompleted(event.target);
  } else addClasseCompleted(event.target);
});

document.getElementById('apaga-tudo').addEventListener('click', function () {
  deleteAllItensList(document.getElementById('lista-tarefas'));
});
