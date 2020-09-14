/*
window.onload = function () {
  const input = document.querySelector('#texto-tarefa');

  const btnCreate = document.querySelector('#criar-tarefa');
  const btnDelete = document.querySelector('#apaga-tudo');
  const btnDeleteFinalized = document.querySelector('#remover-finalizados');

  const ol = document.querySelector('#lista-tarefas');

  // local storage
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

  let todoList = storage.index() ? storage.index() : [];

  const cleanInput = function () {
    input.value = '';
  }

  // verifica se o li com id ja foi splitado
  const verifySplited = function (list) {
    let li = document.querySelector(`#${list}`);
    return li ? true : false;
  }

  function splitBG(positionLi) {
    let li = document.querySelectorAll('li');

    li[positionLi].addEventListener("click", function (event) {
      let li = event.target;
      li.style.backgroundColor = 'rgb(128,128,128)';

      for (let index = 0; index < todoList.length; index += 1) {
        let list = document.querySelectorAll('li');

        if (list[index].id != li.id) list[index].style.backgroundColor = null;
      }
    });

    li[positionLi].addEventListener("dblclick", function (event) {
      let li = event.target;
      if (li.className) li.className = '';
      else li.className = 'completed';
    });
  }

  function automaticSplitTodoList() {
    for (let index = 0; index < todoList.length; index += 1) {
      let list = document.createElement('li');
      list.id = `${todoList[index]}`;
      list.innerText = todoList[index];

      if (!verifySplited(todoList[index])) {
        ol.appendChild(list);
        splitBG(index);
      }      
    }
  }

  function insertTodo() {
    if (input.value != '' && !verifySplited(input.value)) todoList.push(input.value);
    storage.insert(todoList);
    cleanInput();
    automaticSplitTodoList();
  }

  function deleteAllTodo() {
    localStorage.clear('todo-list');
    window.location.reload();
  }

  function deleteTodoFinalized(){
    let ol = document.getElementsByTagName('ol')[0];
    let list = document.querySelectorAll('li');
    for(let index = 0; index < list.length; index += 1){
      if(list[index].className == 'completed') ol.removeChild(list[index]);
    }
  }

  btnCreate.addEventListener('click', insertTodo);
  btnDelete.addEventListener('click', deleteAllTodo);
  btnDeleteFinalized.addEventListener('click', deleteTodoFinalized);
  automaticSplitTodoList();
}
*/

function clearInputValue() {
  document.getElementById('texto-tarefa').value = '';
}

function getOl(){
  return document.getElementById('lista-tarefas');
}

function getInputValue(){
  return document.getElementById('texto-tarefa').value;
}

function getBtnAdd() {
  return document.getElementById('criar-tarefa');
}

function getBtnRemoveFinalized() {
  return document.getElementById('remover-finalizados');
}

function getOl(){
  return document.getElementById('lista-tarefas');
}

function createLi() {
  return document.createElement('li');
}

function getLiAll(){
  return document.getElementsByTagName('li');
}

function removeLi(li){
  let ol = getOl();
  ol.removeChild(li);
}

function insertPropertyInElement({element = '', text = '', classe = ''}){
  if (element) {
    let myElement = element;
    if (text) myElement.innerText = text;
    if (classe) myElement.className = classe;
  }
}

// armazena o li que foi splitado
let liCurrentSplited;

// adicionando evento de click no li
function eventLiClick(li){
  li.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';

    if(liCurrentSplited) liCurrentSplited.style.backgroundColor = '';

    liCurrentSplited = li;
  });
}

// adicionando evendo de double click no li
function eventLiDblClick(li){
  li.addEventListener('dblclick', function(){
    li.classList.toggle('completed');
  });
}

// adicionando eventos no li
function addEventSplitLi(li){
  eventLiClick(li);

  eventLiDblClick(li);
}

function insertLiInOl(text){
  let ol = getOl();
  let li = createLi();
  insertPropertyInElement({text: text, element: li});
  addEventSplitLi(li);
  ol.appendChild(li);
}

let btnAdd = getBtnAdd();
btnAdd.addEventListener('click', function(){
  insertLiInOl(getInputValue());
  clearInputValue();
});

// remove finalizados
let btnRemoveFinalized = getBtnRemoveFinalized();
btnRemoveFinalized.addEventListener('click', function(){
  let li = getLiAll();
  for(let index = 0; index < li.length; index += 1) {
    if (li[index].className == 'completed') removeLi(li[index]);
  }
});

