window.onload = function() {

  const buttonAd = document.querySelector('#criar-tarefa').addEventListener('click', newItem);
  let complete = [];

  function newItem(){

      let listAssignment = document.querySelector('#lista-tarefas');
      let textlist = document.querySelector('#texto-tarefa').value;
      let itemList = document.createElement('li');
      itemList.textContent = textlist;
      listAssignment.appendChild(itemList);
      complete.push(itemList);

      for (let i = 0; i < complete.length; i++) {

         complete[i].addEventListener('click', function(element){
               element.target.style.backgroundColor = 'rgb(128, 128, 128)';
         })

      }

      document.querySelector('#texto-tarefa').value = '';
   }


}
