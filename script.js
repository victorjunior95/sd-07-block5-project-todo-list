// handle events

const handleEventsController = (...types) => {
  for (const type of types) {
    switch (type) {
      case 'click':
        controllerEventsClicks(type);
        break;
      case 'dblclick':
        controllerEventsDoubleClicks(type);
        break;

    }
  }
}

const controllerEventsClicks = (type) => {

  document.addEventListener(type, (event) => {
    const eventDataSet = event.target.dataset.click;
    switch (eventDataSet) {
      case 'btnAddList':
        addListFromInput();
        break;
      case 'selectedItem':
        selectionItemList(event);
        break;
      case 'clearList':
        clearList();
        break;
      case 'removeCompleted':
        clearListCompleted();
        break
      case 'saveList':
        saveListLocalStorage();
        break

    }
  })
}

const controllerEventsDoubleClicks = (type) => {
  document.addEventListener(type, (event) => {
    const eventDataSet = event.target.dataset.dblclick
    switch (eventDataSet) {
      case 'completedItem':
        addCompletedItemList(event);
        break;
    }
  })
}

const addListFromInput = () => {
  const inputText = document.querySelector('#texto-tarefa');
  if (inputText.value) {
    const olLists = document.querySelector('#lista-tarefas');
    olLists.appendChild(createElementList(inputText.value));
    clearTextInput(inputText);
  } else {
    alert('text not exist')
  }
}
const createElementList = (text) => {
  const liElementList = document.createElement('li');
  liElementList.innerText = text;
  liElementList.className = 'list';
  liElementList.dataset.click = 'selectedItem';
  liElementList.dataset.dblclick = 'completedItem'

  return liElementList;
}
const clearTextInput = (Element) => {
  Element.value = '';
}
const selectionItemList = (event) => {
  const currentItemSelected = document.querySelector('.selected');
  if (currentItemSelected) {
    currentItemSelected.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}
const addCompletedItemList = (event) => {
  event.target.classList.toggle('completed');
}

const clearList = () => {
  const lists = document.querySelectorAll('.list');
  lists.forEach(list => {
    list.remove();
  })
}
const clearListCompleted = () => {
  const lists = document.querySelectorAll('.completed');
  lists.forEach(list => {
    list.remove();
  })
}



const saveListLocalStorage = () => {
  const lists = document.querySelectorAll('.list');
  let listsSave = [];
  lists.forEach(list => {
    listsSave.push(list.innerText);
  })
  localStorage.setItem("lists", JSON.stringify(listsSave));
}

const loadListLocalStorage = () => {
  let listsSave = JSON.parse(localStorage.getItem('lists'));
  const olLists = document.querySelector('#lista-tarefas');
  if (localStorage.getItem('lists')) {
    for (const list of listsSave) {
      olLists.appendChild(createElementList(list))
    }
  }
}

window.onload = () => {

  handleEventsController('click', 'dblclick');
  loadListLocalStorage()


}
