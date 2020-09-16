const containerList = document.querySelector('#container-list');
const inputList = document.querySelector('#texto-tarefa');
const btnNewTask = document.querySelector('#criar-tarefa');
const btnClearList = document.querySelector('#apaga-tudo');

const ol = document.createElement('ol');
ol.id='lista-tarefas';
containerList.appendChild(ol);

btnNewTask.addEventListener('click', function () {
  if(inputList.value === '') {
   alert('Adicione uma tarefa!');
  }else {
    const li = document.createElement('li') ;
    const listItem = document.createTextNode(inputList.value);
    li.className = 'task';
    li.appendChild(listItem);
    ol.appendChild(li);
    inputList.value = '';
  }
});

btnClearList.addEventListener('click', function () {
   if(ol.children.length === 0 ){
       alert ('Não há tarefas listadas');
   } else {
    const taskListed = document.querySelectorAll('.task');
    for (let indexList = 0; indexList < taskListed.length; indexList += 1) {
        ol.removeChild(taskListed[indexList]);
    }
   }
});