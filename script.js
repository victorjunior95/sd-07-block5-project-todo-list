const btnAdd = document.getElementById("criar-tarefa");
//const selected = document.getElementsByClassName("selected");

btnAdd.addEventListener("click", function() {
   const novaLi = adicionaTarefa();
novaLi.addEventListener("click", function() {
      mudaCorFundo(novaLi);
})
novaLi.addEventListener("dbclick", function(event) {
      completaTarefa(novaLi);
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
      return novaLi;
}
  
//mudando a cor de fundo da li
function mudaCorFundo(novaLi){
   const selected = document.querySelector(".selected");
   if (selected) {
      selected.classList.remove("selected");
   } 
      novaLi.classList.add("selected"); 
}

//completa terefa 
// function completaTarefa(novaLi){
//    novaLi = ;
// }

//apagando a lista
// const btApagaTudo = document.getElementById('apaga-tudo');
// btApagaTudo.addEventListener('click', function(){
//   const novaLi = getElementsByClassName('li-tarefas');
//   const myOl = document.querySelector('lista-tarefas');
//    for(i = 0; i < novaLi.length; i+=1) {
//      myOl.removeChild(novaLi[i]);
//    }
//  })