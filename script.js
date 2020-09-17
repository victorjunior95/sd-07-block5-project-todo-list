
document.getElementById('criar-tarefa').addEventListener('click', function() {
  let item = document.getElementById('texto-tarefa').value;
  let itemList = document.createElement('li');
  itemList.innerText = item;
  let orderList = document.getElementById('lista-tarefas');
  orderList.appendChild(itemList);
});




