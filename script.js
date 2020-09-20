const backgroundColor = 'rgb(128, 128, 128)';
const getItensList = document.getElementsByTagName('li');
const comparedClass = 'completed';
const arrayItensList = [];

function salveItensListOnLocalStorage() {
  if (getItensList.length === 0) {
    alert('Lista vazia');
  } else {
    for (let index = 0; index < getItensList.length; index += 1) {
      arrayItensList.push(getItensList[index].innerHTML);
    }
  }
  localStorage.setItem('itensList', JSON.stringify(arrayItensList));
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
  for (let index = 0; index < getItensList.length; index += 1) {
    if (getItensList[index].style.backgroundColor === backgroundColor) {
      return getItensList[index];
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
  const resultCheck = checkIfExistItemSelectedInList(getItensList);
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
  const elementFather = itemSelected.parentNode
  const lastElementChild = elementFather.lastElementChild;
  const firstElementChild = elementFather.firstElementChild;

  const textFirsElementChild = firstElementChild.innerText;
  const textLastElementChild = lastElementChild.innerText;

  if (itemSelected === lastElementChild) {
    lastElementChild.innerText = textFirsElementChild;
    firstElementChild.innerText = textLastElementChild;
  } else {
      const nexDownItem =  itemSelected.nextElementSibling;
      const textNexDownItem =  nexDownItem.innerText;
      nexDownItem.innerText = itemSelected.innerText;
      itemSelected.innerText = textNexDownItem;
  }
  itemSelected.style.backgroundColor = 'white';
}

function upItemList(itemSelected) {

  if (getItensList[0] === itemSelected) return alert('Não existe item a cima')

  for (let index = 0; index < getItensList.length; index += 1) {
    if (getItensList[index] === itemSelected) {
      const beforeItemList = getItensList[index - 1];
      const textBeforeItemList = beforeItemList.innerText;

      beforeItemList.innerText = itemSelected.innerText;
      itemSelected.innerText = textBeforeItemList;
      break;
    }
  }
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
