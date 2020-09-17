let createTaskBtn = document.getElementById('criar-tarefa');
let toDoList = document.getElementById('lista-tarefas');
let taskName = document.getElementById('texto-tarefa');
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
    // console.log(item)
  });
});