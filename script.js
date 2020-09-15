window.onload = function () {
  let taskInput = document.querySelector('#texto-tarefa')
  let taskList = document.querySelector('#lista-tarefas')
  let taskBtn = document.querySelector('#criar-tarefa')                                                                                                                                                                                                                                                                                             
  let task = document.createElement('li')
  
  function createTask () {
    let task = document.createElement('li')
    task.innerText = taskInput.value
    taskList.appendChild(task)
    taskInput.value = ""
  }

  taskBtn.addEventListener('click', createTask)

}                                                                                                                                                                                                                                                                                                                                                                                                                   