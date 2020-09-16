const addTask = document.querySelector('#criar-tarefa');
const listElementDad = document.querySelector('#lista-tarefas');
const task = document.querySelector('#texto-tarefa');
const elementList = document.createElement('li');

addTask.addEventListener('click', function () {
  pitchTask(task.value);
  task.value = '';
});

function taskPerformed(elementList) {
    elementList.addEventListener('dblclick', function () {
      if (elementList.classList.contains('complete')) {
        elementList.classList.remove('complete');
      } else {
        elementList.classList.add('complete');
      }
    });
  }
  
function pitchTask(task) {
  elementList.innerText = task;
  listElementDad.appendChild(elementList);
  elementList.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
    elementList.classList.add('selected');
  });
  taskPerformed(elementList);
  return elementList;
}
