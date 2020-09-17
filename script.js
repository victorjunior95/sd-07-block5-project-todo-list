const backgroundColor = 'rgb(128, 128, 128)';

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

function checkIfExistItemSelectedInList (itensList) {
  for (let index = 0; index < itensList.length; index += 1) {
    if (itensList[index].style.backgroundColor === backgroundColor) {
      return false;
    }
  }
  return true;
}

document.getElementById('lista-tarefas').addEventListener('click', function (event){
  const getItensList = document.getElementsByTagName('li');
  const resultCheck = checkIfExistItemSelectedInList(getItensList);
  chanceBackgroundColorItemList(resultCheck, event.target);
});
