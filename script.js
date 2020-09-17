const buttonAddTarefa = document.querySelector('#criar-tarefa');

buttonAddTarefa.addEventListener('click', () => {
  const listTarefa = document.querySelector('#lista-tarefas');
  const textoTarefa = document.querySelector('#texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.classList = 'item';
  tarefa.addEventListener('click', (object) => selectItem(object))
  listTarefa.appendChild(tarefa);
  textoTarefa.value = '';
});

function selectItem(object){
  const listTarefa = document.querySelectorAll('.item');
  const tarefa = object.target;
  for(let i=0; i< listTarefa.length; i+=1){
    if(listTarefa[i].classList[1]){
      listTarefa[i].classList = 'item';
    }
  }
  tarefa.classList = 'item selected';
}
