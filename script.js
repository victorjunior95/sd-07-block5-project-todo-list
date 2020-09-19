const creatorButton = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const cleanAllButton = document.querySelector('#apaga-tudo');


function newEventListener(elementList) {
  elementList.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
    elementList.classList.add('selected');
  } else {
    elementList.classList.add('selected');
  }});
}

function completedTask(elementList) {
  elementList.addEventListener('dblclick', function () {
    if (elementList.classList.contains('completed')) {
      elementList.classList.remove('completed');
    } else {
      elementList.classList.add('completed');
    }
  });
}

function launcherTask(task) {
  const elementList = document.createElement('li');
  elementList.innerText = task;
  olList.appendChild(elementList);
  newEventListener(elementList);
  completedTask(elementList);
  return elementList;
}

creatorButton.addEventListener('click', function () {
  const elementLi = document.getElementById('texto-tarefa');
  launcherTask(elementLi.value);
  elementLi.value = '';
});

cleanAllButton.addEventListener('click', function () {
  const allLi = document.querySelectorAll('li');
  for (let element = 0; element < allLi.length; element += 1) {
    olList.removeChild(allLi[element]);
  }
});