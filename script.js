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
