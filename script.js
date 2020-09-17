const listaTarefas = document.getElementById("lista-tarefas"); 
const btnCriarTarefa = document.getElementById("criar-tarefa");
const apagaTudo = document.getElementById("apaga-tudo")
const salvarTarefas = document.getElementById('salvar-tarefas');



btnCriarTarefa.addEventListener('click', function(){
    
    const item = document.createElement('li');
    document.querySelector('ol').appendChild(item);
    item.innerText = document.querySelector('input').value;
    document.querySelector('input').value = '';

    item.addEventListener('click', function () {
      const isGray = document.querySelector('.selecionado');
      if (isGray) {
        isGray.classList.remove('selected'); 
      }
      item.classList.add('selecionado'); 
    });
})


document.querySelector('#salvar-tarefas').addEventListener('click', function () {
    localStorage.clear();
    const listaSalva = document.querySelector('ol');
    localStorage.setItem('tarefaSalva', listaSalva.innerHTML);
  });

function mostrarListaAtual() {
    document.querySelector('ol').innerHTML = localStorage.getItem('tarefaSalva');
  };
  window.onload = mostrarListaAtual;


  apagaTudo.addEventListener('click', function () {
    listaTarefas.innerHTML = '';
  });
