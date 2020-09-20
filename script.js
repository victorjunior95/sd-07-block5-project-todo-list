const textTarefa = document.getElementById("texto-tarefa").value;
const btnAdd = document.getElementById("criar-tarefa");

//adicionando tarefa
btnAdd.addEventListener("click", function() {
   const paiLista = document.getElementById("lista-tarefas"); 
   const novaLi = document.createElement("li");
   const textTarefa = document.getElementById("texto-tarefa").value;
   const cxInput = document.getElementById("texto-tarefa");
   
   if(textTarefa.length != ""){
      paiLista.appendChild(novaLi);
      novaLi.innerText = textTarefa;
      document.getElementById("texto-tarefa").value =""
   }
   novaLi.addEventListener("click", function(event) {
      MudaCorFundo(novaLi);
   })
      
})

//mudando a cor de fundo da li
function MudaCorFundo(novaLi){
//const novaLi = document.getElementsByTagName('li');
novaLi.addEventListener("click", function(event) {
const selected = document.querySelector(".selected");
   if (selected) {
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