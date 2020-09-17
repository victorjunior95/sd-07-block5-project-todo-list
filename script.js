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
eraseTaskCompleted.innerText = 'Apagar Itens Finalizados';
parentSectionSecond.appendChild(eraseTaskCompleted);
// *********** FIM DA CRIAÇAO DO HTML **********

function createOrdenateList() {
  const parentItemSection = document.getElementById('first-section');
  const ordenateListToDo = document.createElement('ol');
  ordenateListToDo.setAttribute('id', 'lista-tarefas');
  ordenateListToDo.className = 'lista-tarefas';
  parentItemSection.appendChild(ordenateListToDo);
}
createOrdenateList();

function liGenerate(data) {
  if (data.length !== 0) {
    const parentOfOl = document.getElementById('first-section');
    const getOl = document.querySelector('#lista-tarefas');
    parentOfOl.removeChild(getOl);
    createOrdenateList();
    const olTag = document.getElementById('lista-tarefas');
    for (let index = 0; index < data.length; index += 1) {
      const itemLi = document.createElement('li');
      itemLi.className = 'item-tarefa';
      itemLi.setAttribute('id', index);
      itemLi.innerText = data[index];
      olTag.appendChild(itemLi);
    }
  }
}

let newLiReturn = []
const getInsertButton = document.querySelector('#criar-tarefa');
getInsertButton.addEventListener('click', function () {
  const inputData = document.querySelector('#texto-tarefa');
  if (inputData.value) {
    newLiReturn.push(inputData.value);
    liGenerate(newLiReturn);
    inputData.value = '';
  }
});

const getKeyEnter = document.querySelector('#texto-tarefa');
getKeyEnter.addEventListener('keydown', function (event) {
  const inputDataWitchEnter = document.querySelector('#texto-tarefa');
  if (inputDataWitchEnter.value && event.keyCode === 13) {
    newLiReturn.push(inputDataWitchEnter.value);
    liGenerate(newLiReturn);
    inputDataWitchEnter.value = '';
  }
});

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

document.body.addEventListener('dblclick', function (event) {
if (event.target.nodeName === 'LI') {
  const liClicked = event.target;
  liClicked.classList.toggle('completed');
}
});

const getEraseAllButton = document.querySelector('#apaga-tudo');
getEraseAllButton.addEventListener('click', function () {
  const listOrdenateTarget = document.querySelector('#lista-tarefas');
  while (listOrdenateTarget.lastElementChild) {
    listOrdenateTarget.removeChild(listOrdenateTarget.lastElementChild);
  }
  newLiReturn = [];
});

const getEraseItemButton = document.querySelector('#remover-finalizados');
getEraseItemButton.addEventListener('click', function () {
  const completedRemove = document.querySelectorAll('.completed');
  for (let index = 0; index < completedRemove.length; index += 1) {
    let find = completedRemove[index].innerText;
    let indexOfItem = newLiReturn.indexOf(find);
    newLiReturn.splice(indexOfItem, 1);
  }
  liGenerate(newLiReturn);
});
