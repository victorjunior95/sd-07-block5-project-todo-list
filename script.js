const click = document.getElementById('criar-tarefa');

click.addEventListener("click", function() {
  let textInput = document.getElementById('texto-tarefa').value;  
  let textList = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  listItem.innerText = textInput;
  textList.appendChild(listItem);
  document.getElementById('texto-tarefa').value = "";
});


const item = document.getElementById('lista-tarefas');

item.addEventListener("click", function() {

  if (event.target.className === 'completed') {
    document.getElementsByClassName('selected')[0].style.backgroundColor = 'white';

  } else if (document.getElementsByClassName('selected')[0] === undefined) {
    event.target.className = 'selected';
    event.target.style.backgroundColor = 'rgb(128, 128, 128';

    
    

    let completedLenth = document.querySelectorAll('#lista-tarefas .completed').length;

    for (index = 0; index < completedLenth; index += 1) {
      document.getElementsByClassName('completed')[index].style.backgroundColor = 'white';

    }
    

  } else {
    document.getElementsByClassName('selected')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('selected')[0].className = undefined;
    event.target.style.backgroundColor = 'rgb(128, 128, 128';
    event.target.className = 'selected';
  }
});

item.addEventListener("dblclick", function() {
  if (event.target.className != 'completed') {
    event.target.className = 'completed';
  } else if (event.target.className === 'completed') {
    event.target.className = '';
  }
});

document.getElementById('apaga-tudo').addEventListener('click', function() {
  let list = document.getElementById("lista-tarefas")
  let listLength = list.getElementsByTagName("li").length;
  for (let index = 0; index < listLength; index += 1) {
    list.removeChild(list.childNodes[0]);
  }
});