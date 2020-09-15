let entradaTexto = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector("#criar-tarefa")
let listaTarefas = document.querySelector("#lista-tarefas")
let botaoApagarLista = document.querySelector("#apaga-tudo")

botaoTarefa.addEventListener('click', function(){
    let novoElemento = document.createElement("li")
    novoElemento.innerHTML = entradaTexto.value
    listaTarefas.appendChild(novoElemento)  
    novoElemento.addEventListener('click', selecionarItem);// se o novo elemento for clicado a funçao é chamada
    novoElemento.addEventListener('dblclick', riscarSelecionado)
    document.getElementById('texto-tarefa').value='';
    return novoElemento
        
})



function riscarSelecionado(event){
  event.target.classList.add('completed')
  let novoElementoRiscado = document.querySelector('.completed')
  console.log(novoElementoRiscado)
  novoElementoRiscado.addEventListener('dblclick', function(){
    if (novoElementoRiscado !== null) novoElementoRiscado.classList.remove('completed')

  })
}



function selecionarItem(event) {
  apagarSelecionado();
  event.target.classList.add('selected');//adicionar a classe selected
  //essa classe é colocada 
}


function apagarSelecionado() {
    const item = document.querySelector('.selected');//se tiver a classe entra no item
    if (item !== null) item.classList.remove('selected');//se não for nulo remove a classe , o item permanece mais a classe é removida
  }
  
  
botaoApagarLista.addEventListener('click', function(){
   listaTarefas.innerHTML = ''
})



// document.body.insertBefore(divNova, divAtual);