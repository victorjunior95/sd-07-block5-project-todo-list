let makeTask = document.querySelector('#criar-tarefa');
let inputTask = document.querySelector('#texto-tarefa');
let orderedlist = document.querySelector('#lista-tarefas')

//  function teste () {
//     alert (inputTask.value)
//     }
  makeTask.addEventListener('click' , makeTaskList)

  function makeTaskList () {
    let ul = document.createElement('ul');
    ul.className = 'task-item';
    ul.innerText = inputTask.value
    orderedlist.appendChild(ul);
    inputTask.value = '';
    }
