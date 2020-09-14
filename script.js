let entradaTexto = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector("#criar-tarefa")
let listaTarefas = document.querySelector("#lista-tarefas")
let botaoApagarLista = document.querySelector("#apaga-tudo")

botaoTarefa.addEventListener('click', function(){
    let novoElemento = document.createElement("li")
    novoElemento.innerHTML = entradaTexto.value
    listaTarefas.appendChild(novoElemento)  
    novoElemento.addEventListener('click', selectItem);
    document.getElementById('texto-tarefa').value='';
        
})

function clearSelection() {
    const item = document.querySelector('.selected');
    if (item !== null) item.classList.remove('selected');
  }
  
  function selectItem(event) {
    clearSelection();
    event.target.classList.add('selected');
  }




botaoApagarLista.addEventListener('click', function(){
   listaTarefas.innerHTML = ''
})



// document.body.insertBefore(divNova, divAtual);