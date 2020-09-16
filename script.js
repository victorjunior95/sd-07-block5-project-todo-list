let entradaTexto = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector("#criar-tarefa")
let listaTarefas = document.querySelector("#lista-tarefas")
let botaoApagarLista = document.querySelector("#apaga-tudo")
let botaoApagarRiscado = document.querySelector("#remover-finalizados")
let botaoSalvarTarefas = document.querySelector("#salvar-tarefas")
let botaoRemoveSelecionado = document.querySelector("#remover-selecionado")

//adicionar tarefa e chamar funçoes de um e dois clicks
botaoTarefa.addEventListener('click', function(){
    let novoElemento = document.createElement("li")
    if(entradaTexto.value == ""){
      window.alert('Entrada vazia')
    }
    else{
      novoElemento.innerHTML = entradaTexto.value
    novoElemento.classList.add("list-group-item")
    listaTarefas.appendChild(novoElemento)  
    novoElemento.addEventListener('click', selecionarItem);// se o novo elemento for clicado a funçao é chamada
    novoElemento.addEventListener('dblclick', riscarSelecionado)
    document.getElementById('texto-tarefa').value='';
    return novoElemento
    }
   
        
})

//bota de apagar tudo
botaoApagarLista.addEventListener('click', function(){
  listaTarefas.innerHTML = ''
})

//selecionar item um click , 
function selecionarItem(event) {
  TrocarSelecionado();
  event.target.classList.add('selected');//adicionar a classe selected
  
  //essa classe é colocada 
}
//funçao para deixar somente um selecionado de cada vez 
function TrocarSelecionado() {
  const item = document.querySelector('.selected');//se tiver a classe entra no item
  if (item !== null) item.classList.remove('selected');//se não for nulo remove a classe , o item permanece mais a classe é removida
}


//riscar selecionado dois clicks 
function riscarSelecionado(event){
  event.target.classList.add('completed')//no proprio novoElemento vai ser aplicado a funçao 
  let novoElementoRiscado = document.querySelector('.completed')
  console.log(novoElementoRiscado)
  novoElementoRiscado.addEventListener('dblclick', function(){
    if (novoElementoRiscado !== null) novoElementoRiscado.classList.remove('completed')

  })
  return novoElementoRiscado
}

//apagar selecionado de dois clicks 
botaoApagarRiscado.addEventListener('click' , function(){
  let listaRiscados = document.querySelectorAll('.completed')
  console.log(listaRiscados)
  if(listaRiscados.length !== 0){
    listaRiscados.forEach(function(cadaItem){ // com o for each eu tenho um loop onde eu aplico para cada item a funçao estabelecida
      listaTarefas.removeChild(cadaItem)
    })
    }
      
})
//remover selecionado de um click
botaoRemoveSelecionado.addEventListener("click",function(){
  let elementoSelecionado = document.querySelector('.selected')
  listaTarefas.removeChild(elementoSelecionado)

})


//guardar as tarefas 
function salvarTarefas() {
  localStorage.setItem('Tarefas', listaTarefas.innerHTML);
}

function pegarElementoSalvo() {
  listaTarefas.innerHTML = localStorage.getItem('Tarefas');
}
pegarElementoSalvo()
botaoSalvarTarefas.addEventListener("click" , salvarTarefas)



//target é sempre o elemento concreto que recebeu o click, descendente do elemento ao qual foi amarrado 
//o event handler caso o click tenha sido disparado nele. Há um outro parâmetro a ter em conta: bubbling (ou propagação do evento).
// document.body.insertBefore(divNova, divAtual); // uma forma de colocar uma div depois da outra



