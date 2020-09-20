const toDoList = document.getElementById('lista-tarefas');
const taskName = document.getElementById('texto-tarefa');
taskName.focus();
const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.addEventListener('click', function () {
  const item = document.createElement('li');
  item.innerHTML = taskName.value;
  toDoList.appendChild(item);
  taskName.value = '';
  taskName.focus();
  item.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    item.classList.add('selected');
  });

  item.addEventListener('dblclick', function () {
    if (item.classList.contains('completed')) {
      item.classList.remove('completed');
    } else {
      item.classList.add('completed');
    }
  })

  const clearBtn = document.getElementById('apaga-tudo');
  clearBtn.addEventListener('click', function () {
    toDoList.innerText = '';
  });
  
  const removeCompletedBtn = document.getElementById('remover-finalizados');
  removeCompletedBtn.addEventListener('click', function () {
    if (item.classList.contains('completed')) {
      toDoList.removeChild(item);
    }
  })

  const removeSelectedBtn = document.getElementById('remover-selecionado');
  removeSelectedBtn.addEventListener('click', function () {
    if (item.classList.contains('selected')) {
      toDoList.removeChild(item);
    }
  });

})

