const backgroundColor = 'rgb(128, 128, 128)';
const getItemsList = document.getElementsByTagName('li');
const comparedClass = 'completed';
const arrayItemsList = [];
function salveItensListOnLocalStorage() {
  if (getItemsList.length === 0) {
    alert('Lista vazia');
  } else {
    for (let index = 0; index < getItemsList.length; index += 1) {
      arrayItemsList.push(getItemsList[index].innerHTML);
    }
  }
  localStorage.setItem('itensList', JSON.stringify(arrayItemsList));
}

function removeItensListOnLocalStorage() {
  const getArrayList = JSON.parse(localStorage.getItem('itensList'));
}

function addItemListInOrderList(itemList) {
  document.getElementById('lista-tarefas').appendChild(itemList);
}

function createItemList(arrayItens) {
  arrayItens.forEach((item) => {
    const itemList = document.createElement('li');
    itemList.innerText = item;
    addItemListInOrderList(itemList);
  });
}

function loadingListItemsOnLocalstorage() {
  const getArrayList = JSON.parse(localStorage.getItem('itensList'));
  if (getArrayList !== null) createItemList(getArrayList);
}

loadingListItemsOnLocalstorage();

function clearInputValue(item) {
  item.value = '';
}

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

function getItemSelected() {
  for (let index = 0; index < getItemsList.length; index += 1) {
    if (getItemsList[index].style.backgroundColor === backgroundColor) {
      return getItemsList[index];
    }
  }
  return false;
}

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

document.getElementById('criar-tarefa').addEventListener('click', function () {
  const inputItem = document.getElementById('texto-tarefa');
  const arrayItens = [inputItem.value];
  createItemList(arrayItens);
  clearInputValue(inputItem);
});

document.getElementById('lista-tarefas').addEventListener('click', function (event) {
  const resultCheck = checkIfExistItemSelectedInList(getItemsList);
  chanceBackgroundColorItemList(resultCheck, event.target);
});

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
  const resultBoolean = existClassCompleted(event.target);
  if (resultBoolean) {
    removeClasseCompleted(event.target);
    event.target.style.backgroundColor = 'rgb(255,255,255)';
  } else addClasseCompleted(event.target);
});

document.getElementById('apaga-tudo').addEventListener('click', function () {
  deleteAllItensList(document.getElementById('lista-tarefas'));
});

document.getElementById('salvar-tarefas').addEventListener('click', function () {
  salveItensListOnLocalStorage();
});

document.getElementById('mover-cima').addEventListener('click', function (event) {
  const elementFather = document.getElementById('lista-tarefas');
  elementFather.insert
});

function downItemList(itemSelected) {
  const elementFather = itemSelected.parentNode;
  const lastElementChild = elementFather.lastElementChild;
  const firstElementChild = elementFather.firstElementChild;
  const nextSibling = itemSelected.nextSibling;

  if (itemSelected === lastElementChild) {
    elementFather.insertBefore(itemSelected, firstElementChild);
  } else {
    elementFather.insertBefore(itemSelected, nextSibling.nextSibling);
  }
  itemSelected.style.backgroundColor = 'white';
}

function upItemList(itemSelected) {
  const elementFather = itemSelected.parentNode;
  const lastElementChild = elementFather.lastElementChild;
  const firstElementChild = elementFather.firstElementChild;
  const previousSibling = itemSelected.previousElementSibling;

  if (itemSelected === firstElementChild) {
    itemSelected.style.backgroundColor = 'white';
    return alert('Não existem itens a cima')
  }
  elementFather.insertBefore(itemSelected, previousSibling);
  itemSelected.style.backgroundColor = 'white';
}

document.getElementById('mover-cima').addEventListener('click', function() {
  const resultItemSelectec = getItemSelected();
  if (resultItemSelectec === false) return alert('Selecione um item');
  upItemList(resultItemSelectec);
});

document.getElementById('mover-baixo').addEventListener('click', function() {
  const resultItemSelectec = getItemSelected();
  if (resultItemSelectec === false) return alert('Selecione um item');
  downItemList(resultItemSelectec);
});

function mountArrayOfCompletedClass() {
  const arrayOfCompletedClass = []
  for (let index = 0; index < getItemsList.length; index += 1) {
    if (getItemsList[index].getAttribute('class') === comparedClass) {
      arrayOfCompletedClass.push(getItemsList[index]);
    }
  }
  return arrayOfCompletedClass;
}

function removeFinishedItems() {
  const elementFather = getItemsList[0].parentNode;

  const arrayOfCompletedClass = mountArrayOfCompletedClass();
  const totalItems = arrayOfCompletedClass.length

  for (let index = 0; index < totalItems; index += 1) {
    elementFather.removeChild(arrayOfCompletedClass[index]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', function() {
  removeFinishedItems();
});
