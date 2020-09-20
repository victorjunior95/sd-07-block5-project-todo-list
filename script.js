const textTarefa = document.getElementById("texto-tarefa").value;
const btnAdd = document.getElementById("criar-tarefa");

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
   btnAdd.addEventListener("click", function() {
      const novaLi = adicionaTarefa();
      novaLi.addEventListener("click", function(event) {
         mudaCorFundo(novaLi);
      })
      novaLi.addEventListener("dbclick", function(event) {
         mudaCorFundo(novaLi);
      })
   })

//mudando a cor de fundo da li
function mudaCorFundo(novaLi){

const selected = document.querySelector(".selected");
   if (selected) {
      selected.classList.remove("selected");
   } 
      event.target.classList.add("selected"); 

}
//ompleta terefa 
function completaTarefa(novaLi){
   novaLi.addEventListener("dbclick", function(event) {
   const completed = document.querySelector(".completed");
      if (completed) {
         selected.classList.remove("selected");
      } 
         event.target.classList.add("selected"); 
   })
   }

//apagando a lista
const btApagaTudo = document.getElementById('apaga-tudo');
btApagaTudo.addEventListener('click', function(){
  const novaLi = getElementsByClassName('li-tarefas');
  const myOl = document.querySelector('lista-tarefas');
   for(i = 0; i < novaLi.length; i+=1) {
     myOl.removeChild(novaLi[i]);
   }
 })