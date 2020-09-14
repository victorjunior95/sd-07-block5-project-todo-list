const storage = {
  index: function () {
    let todoList = JSON.parse(localStorage.getItem('todo-list'));

    return todoList;
  },

  insert: function (todoList) {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  },

  delete: function (id) {
    localStorage.removeItem(todoList.id)
  }
}

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

function createLi() {
  return document.createElement('li');
}

function getLiAll() {
  return document.getElementsByTagName('li');
}

function getLiCompleted(){
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
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';

    if (liCurrentSplited) liCurrentSplited.style.backgroundColor = '';

    liCurrentSplited = li;
  });
}

// adicionando evendo de double click no li
function eventLiDblClick(li) {
  li.addEventListener('dblclick', function () {
    li.classList.toggle('completed');
  });
}

// adicionando eventos no li
function addEventSplitLi(li) {
  eventLiClick(li);

  eventLiDblClick(li);
}

function insertLiInOl(text) {
  let ol = getOl();
  let li = createLi();
  insertPropertyInElement({ text: text, element: li });
  addEventSplitLi(li);
  ol.appendChild(li);
}

let btnAdd = getBtnAdd();
btnAdd.addEventListener('click', function () {
  insertLiInOl(getInputValue());
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
