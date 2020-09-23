const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const removeFinalizado = document.getElementById('remover-finalizados');
const apagarTudo = document.getElementById('apaga-tudo');
const feito = document.getElementsByClassName('feito');



criaTarefa.addEventListener('click', function(){ 
    if(textoTarefa.value !== ''){
        const itenList = document.createElement('li');
        itenList.innerText = textoTarefa.value;
        itenList.className = ('iten-list')
        listaTarefas.appendChild(itenList);
        textoTarefa.value = '';
    }
});



listaTarefas.addEventListener('click', function(event){
    if(event.target.classList.contains('feito')){
        event.target.classList.remove('feito');
    }else{
        event.target.classList.add('feito');
    }
});


apagarTudo.addEventListener('click', function () {    
    while (listaTarefas.hasChildNodes()){
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
  });

removeFinalizado.addEventListener('click', function () {
    while (listaTarefas.hasChildNodes()) { 
      listaTarefas.removeChild(document.querySelector('.feito'));
    }
  });

