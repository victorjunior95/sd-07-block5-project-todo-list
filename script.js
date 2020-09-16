const storageTodoList = {
  index: function () {
    let todoList = JSON.parse(localStorage.getItem('todo-list'));

    return todoList;
  },

  insert: function (todoList) {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }
}

// lista de tarefas
let todoList = [];

function clearInputValue() {
  document.getElementById('texto-tarefa').value = '';
}

function getOl() {
  return document.getElementById('lista-tarefas');
}

function getInputValue() {
  return document.getElementById('texto-tarefa').value;
}

function getBtnAdd() {
  return document.getElementById('criar-tarefa');
}

function getBtnRemoveFinalized() {
  return document.getElementById('remover-finalizados');
}

function getBtnRemoveAll() {
  return document.getElementById('apaga-tudo');
}

function getBtnRemoveSelected(){
  return document.getElementById('remover-selecionado');
}

function getBtnSave() {
  return document.getElementById('salvar-tarefas');
}

function createLi() {
  return document.createElement('li');
}

function getLiAll() {
  return document.getElementsByTagName('li');
}

function getLiCompleted() {
  return document.querySelectorAll('.completed');
}

function removeLi(li) {
  let ols = getOl();
  ols.removeChild(li);
}

function insertPropertyInElement({ element = '', text = '', classe = '' }) {
  
  if (element) {
    let myElement = element;
    if (text) myElement.innerText = text;
    if (classe) myElement.className = classe;
  }
}

// armazena o li que foi splitado
let liCurrentSplited;

// adicionando evento de click no li
function eventLiClick(li) {
  li.addEventListener('click', function (event) {
    event.target.classList.add('selected');

    if (liCurrentSplited) liCurrentSplited.classList.remove('selected');

    liCurrentSplited = li;
  });
}

// adicionando evendo de double click no li
function eventLiDblClick(li) {
  li.addEventListener('dblclick', function (event) {
    li.classList.toggle('completed');
    let lis = getLiAll()
    for(let index = 0; index < lis.length; index += 1){
      if(lis[index].className == 'completed') todoList[index].classes = 'completed';
    }
  });
}

// adicionando eventos no li
function addEventSplitLi(li) {
  eventLiClick(li);

  eventLiDblClick(li);
}

function insertLiInOl(text, classe) {
  console.log(classe)
  let ol = getOl();
  let li = createLi();
  insertPropertyInElement({ text: text, element: li, classe: classe });
  addEventSplitLi(li);
  ol.appendChild(li);
  todoList.push({value: text, classes: ''});
}

let btnAdd = getBtnAdd();
btnAdd.addEventListener('click', function () {
  if(getInputValue()) insertLiInOl(getInputValue());
  clearInputValue();
});

// remove finalizados
let btnRemoveFinalized = getBtnRemoveFinalized();
btnRemoveFinalized.addEventListener('click', function () {
  let li = getLiCompleted();
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className == 'completed') removeLi(li[index]);
  }
});

// remove todos
const btnRemoveAll = getBtnRemoveAll();
btnRemoveAll.addEventListener('click', function () {
  let ol = getOl();
  ol.innerHTML = '';
});

// save storage
const btnSave = getBtnSave();
btnSave.addEventListener('click', function () {
  if (todoList) storageTodoList.insert(todoList);
});

const btnRemoveSelected = getBtnRemoveSelected();
btnRemoveSelected.addEventListener('click', function(){
  let selected = document.getElementsByClassName('selected')[0];
  
  if(selected) {
    removeLi(selected);
    todoList = [];
  }
});

window.onload = function () {
  let todoList = storageTodoList.index();

  if (todoList) {
    for (let index = 0; index < todoList.length; index += 1) {
      insertLiInOl(todoList[index].value, todoList[index].classes);
    }
  }
}
