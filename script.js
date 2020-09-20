window.onload = function() {
   document.getElementById("texto-tarefa").focus();
 };

const btAdd = document.getElementById("criar-tarefa");
const btRmvSelect = document. getElementById("remover-selecionado");
const btMvUp = document.getElementById("mover-cima");
const btMvDw = document.getElementById("mover-baixo");
const btRmvFinalizados = document.getElementById("remover-finalizados");
const btRmvAll = document.getElementById("remover-tudo");
const btSaveList = document.getElementById("salvar-tarefas");

btAdd.addEventListener('click', function() {
   const novaLi = adicionaTarefa();
novaLi.addEventListener('click', function(event) {
      mudaCorFundo(novaLi);
novaLi.addEventListener('dblclick', function(event) {
      completaTarefa(novaLi);
btRmvSelect.addEventListener('click', function () {
      removeSelecionados();
})
})
})
})
//adicionando tarefa
function adicionaTarefa(){
      const paiLista = document.getElementById("lista-tarefas"); 
      const novaLi = document.createElement("li");
      const textTarefa = document.getElementById("texto-tarefa").value;
      const cxInput = document.getElementById("texto-tarefa");

      if(textTarefa.length != ""){
         paiLista.appendChild(novaLi);
         novaLi.innerText = textTarefa;
         document.getElementById("texto-tarefa").value =""
      }
      document.getElementById("texto-tarefa").focus();
      return novaLi;     
}
  
//mudando a cor de fundo da li
function mudaCorFundo(novaLi){
   const li = Event.target
   const selected = document.querySelector(".selected");
   if (selected) {
      selected.classList.remove("selected");
   } 
      novaLi.classList.add("selected"); 
}

//completa terefa 
function completaTarefa(novaLi){
   const completed = novaLi.classList.contains("completed");
   if (completed) {
      novaLi.classList.remove("completed");
   } 
   else {novaLi.classList.add("completed");
   }
   return;
}

//remover seleciondos
function removeSelecionados(){
   let selecionados = document.getElementsByClassName("selected");
   let ul = document.getElementById("lista-tarefas");
   if (selecionados.length){
      for(let i = 0; i< selecionados.length; i += 1){
         ul.removeChild(selecionados.children[(i)]);         
      }
   }
}

//apagando a lista
// const btApagaTudo = document.getElementById('apaga-tudo');
// btApagaTudo.addEventListener('click', function(){
//   const novaLi = getElementsByClassName('li-tarefas');
//   const myOl = document.querySelector('lista-tarefas');
//    for(i = 0; i < novaLi.length; i+=1) {
//      myOl.removeChild(novaLi[i]);
//    }
//  })