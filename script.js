let click = document.getElementById('criar-tarefa');

click.addEventListener("click", function() {
  let textInput = document.getElementById('texto-tarefa').value;  
  let textList = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  listItem.innerText = textInput;
  textList.appendChild(listItem);
  document.getElementById('texto-tarefa').value = "";
});

document.getElementById('lista-tarefas').addEventListener("click", function(e) {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
});