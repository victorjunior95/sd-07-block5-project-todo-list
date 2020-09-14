const add = document.querySelector('#criar-tarefa')
const assignment = document.querySelector('#texto-tarefa')

add.addEventListener('click', function () {
  let iten1 = assignment.value
  let list = document.querySelector('#lista-tarefas').innerHTML+= "<li>"+iten1+"</li>"
  assignment.value =""
      })
