//função para alterar o background de um item na lista quando clicado

function changeSelected(event) {
    let item = document.querySelectorAll('li');

  for (let i = 0; i < item.length;i += 1){
    if (item[i].classList.contains('selected')){
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
    }
  }
      event.target.classList.add('selected');
}

// função para criar items na lista puxando o valor do input

function createListItem(){
  let ordList = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let listItems = [];
  let item = document.createElement('li');

  item.innerText = input.value;
  item.className = 'item';
  item.addEventListener('click', changeSelected);

  ordList.appendChild(item);

  input.value = "";
}

let addButton = document.getElementById('criar-tarefa');

addButton.addEventListener('click', createListItem);




