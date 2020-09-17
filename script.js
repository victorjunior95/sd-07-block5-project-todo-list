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

function chanceBackgroundColorItemList(itensList) {
  const backgroundColor = 'rgb(128, 128, 128)';
  itensList.style.backgroundColor = backgroundColor;
}

document.getElementById('lista-tarefas').addEventListener('click', function (event){
  const getItensList = document.getElementsByTagName('li');
  chanceBackgroundColorItemList(event.target);
});



