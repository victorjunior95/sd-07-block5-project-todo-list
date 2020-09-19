function basicStructure() {
  const headerPage = document.createElement('header');
  headerPage.className = 'head-class';
  document.body.appendChild(headerPage);
  const navPage = document.createElement('nav');
  document.body.appendChild(navPage);
  const mainPage = document.createElement('main');
  mainPage.className = 'main-class';
  document.body.appendChild(mainPage);
  const articlePage = document.createElement('article');
  mainPage.appendChild(articlePage);
  const sectionFirst = document.createElement('section');
  sectionFirst.className = 'first-section';
  sectionFirst.setAttribute('id', 'first-section');
  articlePage.appendChild(sectionFirst);
  const sectionSecond = document.createElement('section');
  sectionSecond.className = 'second-section';
  sectionSecond.setAttribute('id', 'second-section');
  articlePage.appendChild(sectionSecond);
  const asidePage = document.createElement('aside');
  mainPage.appendChild(asidePage);
  const footerPage = document.createElement('footer');
  document.body.appendChild(footerPage);
}
basicStructure();
// Add title into tag header
const getHeader = document.getElementsByTagName('header')[0];
const titlePage = document.createElement('h1');
titlePage.className = 'title';
titlePage.innerText = 'Minha Lista de Tarefas';
getHeader.appendChild(titlePage);
// Add paragraph for nav
const getNav = document.getElementsByTagName('nav')[0];
const paragraphInformactive = document.createElement('p');
paragraphInformactive.setAttribute('id', 'funcionamento');
paragraphInformactive.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
getNav.appendChild(paragraphInformactive);
// Section First Select
const parentSectionFirst = document.getElementById('first-section');
// Input
const inputTextItem = document.createElement('input');
inputTextItem.setAttribute('type', 'text');
inputTextItem.setAttribute('id', 'texto-tarefa');
inputTextItem.className = 'texto-tarefa';
parentSectionFirst.appendChild(inputTextItem);
// Button for add task
const sendTextItem = document.createElement('button');
sendTextItem.className = 'criar-tarefa';
sendTextItem.setAttribute('id', 'criar-tarefa');
sendTextItem.innerText = 'Adicionar Nova Tarefa';
parentSectionFirst.appendChild(sendTextItem);
// Section Second Select
const parentSectionSecond = document.getElementById('second-section');
// botton for erase all task
const eraseAllTasksButton = document.createElement('button');
eraseAllTasksButton.className = 'apaga-tudo';
eraseAllTasksButton.setAttribute('id', 'apaga-tudo');
eraseAllTasksButton.innerText = 'Apagar Tudo';
parentSectionSecond.appendChild(eraseAllTasksButton);

const eraseTaskCompleted = document.createElement('button');
eraseTaskCompleted.className = 'remover-finalizados';
eraseTaskCompleted.setAttribute('id', 'remover-finalizados');
eraseTaskCompleted.innerText = 'Apagar Tarefas Finalizadas';
parentSectionSecond.appendChild(eraseTaskCompleted);

const saveTask = document.createElement('button');
saveTask.className = 'salvar-tarefas';
saveTask.setAttribute('id', 'salvar-tarefas');
saveTask.innerText = 'Salvar Lista';
parentSectionSecond.appendChild(saveTask);

const removeSelectedButton = document.createElement('button');
removeSelectedButton.className = 'remover-selecionado';
removeSelectedButton.setAttribute('id', 'remover-selecionado');
removeSelectedButton.innerText = 'Remover Selecionado';
parentSectionSecond.appendChild(removeSelectedButton);

const moveUpButton = document.createElement('button');
moveUpButton.className = 'remover-selecionado';
moveUpButton.setAttribute('id', 'mover-cima');
moveUpButton.innerText = 'Up';
parentSectionSecond.appendChild(moveUpButton);

const moveDownButton = document.createElement('button');
moveDownButton.className = 'remover-selecionado';
moveDownButton.setAttribute('id', 'mover-baixo');
moveDownButton.innerText = 'Down';
parentSectionSecond.appendChild(moveDownButton);
// *********** FIM DA CRIAÇAO DO HTML **********

// Create OL
function createOrdenateList() {
  const parentItemSection = document.getElementById('first-section');
  const ordenateListToDo = document.createElement('ol');
  ordenateListToDo.setAttribute('id', 'lista-tarefas');
  ordenateListToDo.className = 'lista-tarefas';
  parentItemSection.appendChild(ordenateListToDo);
}
createOrdenateList();

function removeOrdenateList() {
  const parentOfOl = document.getElementById('first-section');
  const getOl = document.querySelector('#lista-tarefas');
  parentOfOl.removeChild(getOl);
}
// Load items on page
function loadListItem(data) {
  if (data !== null) {
    const parentOfOl = document.getElementById('first-section');
    const getOl = document.querySelector('#lista-tarefas');
    parentOfOl.removeChild(getOl);
    createOrdenateList();
    const olTag = document.getElementById('lista-tarefas');
    for (let index = 0; index < data.length; index += 1) {
      const itemLi = document.createElement('li');
      itemLi.setAttribute('id', data[index].id);
      itemLi.className = data[index].class;
      itemLi.innerText = data[index].content;
      olTag.appendChild(itemLi);
    }
  }
}
// Get data LocalStorage
function getLocalStorage() {
  let propagationDataStorage = [];
  const tasksLoadeds = localStorage.getItem('task');
  propagationDataStorage = JSON.parse(tasksLoadeds);
  loadListItem(propagationDataStorage);
  if (propagationDataStorage === null) {
    propagationDataStorage = [];
    return propagationDataStorage;
  }
  return propagationDataStorage;
}
const arrayFullDataTasks = getLocalStorage();
loadListItem(arrayFullDataTasks);
// Lis Generator
function createListItem(data) {
  removeOrdenateList();
  createOrdenateList();
  const olTag = document.getElementById('lista-tarefas');
  for (let index = 0; index < data.length; index += 1) {
    const id = index;
    let classSet = 'item-tarefa';
    if (data[index].class.length > 11) {
      classSet = data[index].class;
    }
    const itemLi = document.createElement('li');
    itemLi.className = classSet;
    itemLi.setAttribute('id', id);
    itemLi.innerText = data[index].content;
    olTag.appendChild(itemLi);
  }
}
// insert task with click
const getInsertButton = document.querySelector('#criar-tarefa');
getInsertButton.addEventListener('click', function () {
  const inputData = document.querySelector('#texto-tarefa');
  if (inputData.value) {
    const task = {
      id: 0,
      class: '',
      content: inputData.value,
    };
    arrayFullDataTasks.push(task);
    createListItem(arrayFullDataTasks);
    inputData.value = '';
  }
});
// insert task with enter
const getKeyEnter = document.querySelector('#texto-tarefa');
getKeyEnter.addEventListener('keydown', function (event) {
  const inputDataWitchEnter = document.querySelector('#texto-tarefa');
  if (inputDataWitchEnter.value && event.keyCode === 13) {
    const task = {
      id: 0,
      class: '',
      content: inputDataWitchEnter.value,
    };
    arrayFullDataTasks.push(task);
    createListItem(arrayFullDataTasks);
    inputDataWitchEnter.value = '';
  }
});
// Remove all
const getEraseAllButton = document.querySelector('#apaga-tudo');
getEraseAllButton.addEventListener('click', function () {
  const listOrdenateTarget = document.querySelector('#lista-tarefas');
  while (listOrdenateTarget.lastElementChild) {
    listOrdenateTarget.removeChild(listOrdenateTarget.lastElementChild);
  }
  while (arrayFullDataTasks.length) {
    arrayFullDataTasks.pop();
  }
  localStorage.clear();
});
// Marck checked item clicked as selected
document.body.addEventListener('click', function (event) {
  if (event.target.nodeName === 'LI') {
    const liSelected = document.querySelectorAll('.selected')[0];
    const liClicked = event.target;
    if (liSelected) {
      liSelected.classList.remove('selected');
      liClicked.classList.add('selected');
    } else {
      liClicked.classList.add('selected');
    }
  }
});
// Marck checked item double clicked as completed
document.body.addEventListener('dblclick', function (event) {
  if (event.target.nodeName === 'LI') {
    const liClicked = event.target;
    liClicked.classList.toggle('completed');
  }
});
// Remove item completed
const getEraseItemButton = document.querySelector('#remover-finalizados');
getEraseItemButton.addEventListener('click', function () {
  const completedRemove = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < completedRemove.length; index += 1) {
    if (completedRemove[index].classList.contains('selected')) {
      completedRemove[index].classList.remove('selected');
    }
  }
  const arrayFilter = [];
  for (let outherIndex = 0; outherIndex < completedRemove.length; outherIndex += 1) {
    arrayFilter.push({
      id: completedRemove[outherIndex].id,
      class: completedRemove[outherIndex].className,
      content: completedRemove[outherIndex].innerText,
    });
  }
  function filterCase(data) {
    return data.class !== 'item-tarefa completed';
  }
  const filtredItensCompleted = arrayFilter.filter(filterCase);
  createListItem(filtredItensCompleted);
});
// Local stored itens
const saveTasksButton = document.querySelector('#salvar-tarefas');
saveTasksButton.addEventListener('click', function () {
  const itemsForSave = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < itemsForSave.length; index += 1) {
    if (itemsForSave[index].classList.contains('selected')) {
      itemsForSave[index].classList.remove('selected');
    }
  }
  const arrayForLocalStorage = [];
  for (let index = 0; index < itemsForSave.length; index += 1) {
    arrayForLocalStorage.push({
      id: itemsForSave[index].id,
      class: itemsForSave[index].className,
      content: itemsForSave[index].innerText,
    });
  }
  localStorage.setItem('task', JSON.stringify(arrayForLocalStorage));
});
// Remove selected
const buttonDeleteItemSelected = document.querySelector('#remover-selecionado');
buttonDeleteItemSelected.addEventListener('click', function () {
  const selectedRemove = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < selectedRemove.length; index += 1) {
    if (selectedRemove[index].classList.contains('completed')) {
      selectedRemove[index].classList.remove('completed');
    }
  }
  const arrayFilter = [];
  for (let outherIndex = 0; outherIndex < selectedRemove.length; outherIndex += 1) {
    arrayFilter.push({
      id: selectedRemove[outherIndex].id,
      class: selectedRemove[outherIndex].className,
      content: selectedRemove[outherIndex].innerText,
    });
  }
  function filterCase(data) {
    return data.class !== 'item-tarefa selected';
  }
  const filtredItensSelected = arrayFilter.filter(filterCase);
  createListItem(filtredItensSelected);
});
// Button Function item Up
function itemUp(data, from, to) {
  if (to >= 0 && from < data.length) {
    data.splice(to, 0, data.splice(from, 1)[0]);
    createListItem(data);
  }
}
document.body.addEventListener('click', function (event) {
  if (event.target.id === 'mover-cima' || event.target.id === 'mover-baixo') {
    const selectedItemMoveUp = document.querySelectorAll('.item-tarefa');
    const arrayFilter = [];
    for (let index = 0; index < selectedItemMoveUp.length; index += 1) {
      arrayFilter.push({
        id: selectedItemMoveUp[index].id,
        class: selectedItemMoveUp[index].className,
        content: selectedItemMoveUp[index].innerText,
      });
    }
    const arrayReceived = document.getElementsByClassName('selected');
    if (arrayReceived.length !== 0) {
      const itemFrom = parseInt(arrayReceived[0].id, 10);
      let itemTo = 0;
      if (event.target.id === 'mover-cima') {
        itemTo = itemFrom - 1;
      } else {
        itemTo = itemFrom + 1;
      }
      itemUp(arrayFilter, itemFrom, itemTo);
    }
  }
});
