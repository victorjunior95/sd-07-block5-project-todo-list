let createTaskBtn = document.getElementById('criar-tarefa');
let toDoList = document.getElementById('lista-tarefas');
let taskName = document.getElementById('texto-tarefa');
let clearBtn = document.getElementById('apaga-tudo');
let removeCompletedBtn = document.getElementById('remover-finalizados');
taskName.focus();

createTaskBtn.addEventListener('click', function(){
  let item = document.createElement('li');
  item.innerHTML = taskName.value;
  toDoList.appendChild(item);
  taskName.value = '';
  taskName.focus();
  
  item.addEventListener('click', function(){
    let selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    } 
    item.classList.add('selected');
  });

  item.addEventListener('dblclick', function(){
    if (item.classList.contains('completed')){
      item.classList.remove('completed');
    } else {
      item.classList.add('completed');
    }
  })

  clearBtn.addEventListener('click', function(){
    toDoList.innerText = '';
  })
  
  removeCompletedBtn.addEventListener('click', function(){
    if (item.classList.contains('completed')){
      toDoList.removeChild(item);
    }
  })
})

