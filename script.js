window.onload = function() {


  const buttonAd = document.querySelector('#criar-tarefa').addEventListener('click', newItem);

  function newItem(){

      let listAssignment = document.querySelector('#lista-tarefas');
      let textlist = document.querySelector('#texto-tarefa').value;
      let itemList = document.createElement('li');
      itemList.textContent = textlist;
      listAssignment.appendChild(itemList);
      document.querySelector('#texto-tarefa').value = '';

   }

}
