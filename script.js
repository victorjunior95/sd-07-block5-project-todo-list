window.onload = function () {
  let taskInput = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let taskBtn = document.querySelector('#criar-tarefa');                                                                                                                                                                                                                                                                                           
  let selected = document.querySelector('.selected')
  let removeAll = document.querySelector('#apaga-tudo')

  // Add task button function

  taskBtn.addEventListener('click', function () {
    // Add new task
    let task = document.createElement('li');
    task.innerText = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = "";
    
    // Adding click event selected in task
    task.addEventListener('click', getSelected);

    // Adding double click event completed in task
    task.addEventListener('dblclick', getCompleted);
  });

 


  let getSelected = function (event) {
    if (selected !== null) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = event.target
    } else {
      event.target.classList.add('selected');
      selected = event.target
    };
  }

  let getCompleted = function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
    } else {
      event.target.classList.add('completed');;
    }
  }

  let cleanAllTasks = function () {
    let taskListChildren = taskList.querySelectorAll('li')
    for (let index = 0 ; index < taskListChildren.length ; index += 1) {
      taskList.removeChild(taskListChildren[index])
    }
  }

  removeAll.addEventListener('click', cleanAllTasks)
  
}                                                                                                                                                                                                                                                                                                                                                                                                                   