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
      cxInput.focus();
   }
   ;
})