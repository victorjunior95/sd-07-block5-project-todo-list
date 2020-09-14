let selected;

document.querySelector('#criar-tarefa').addEventListener('click', function(){
  const li = document.createElement('li')
  li.addEventListener('click', function(){
    li.className = 'selected';
    if(selected != undefined){
      selected.className = '';
    }
    selected = li;
  })
  li.innerText = document.querySelector('#texto-tarefa').value
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#lista-tarefas').appendChild(li)
})