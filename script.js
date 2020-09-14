

document.querySelector('#criar-tarefa').addEventListener('click', function(){
  const li = document.createElement('li')
  li.addEventListener('click', function(){
    li.style.backgroundColor = 'rgb(128, 128, 128)'
  })
  li.innerText = document.querySelector('#texto-tarefa').value
  document.querySelector('#lista-tarefas').appendChild(li)
})