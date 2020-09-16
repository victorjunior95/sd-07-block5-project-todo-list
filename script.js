const textoTarefa = document.getElementById("texto-tarefa");
const botaoCriarTarefa = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
let arrayListaComTodasTarefas = [];

botaoCriarTarefa.addEventListener("click", function (){
     let itemParaAdicionar = document.createElement("li");
     console.log(itemParaAdicionar);
     itemParaAdicionar.innerText = textoTarefa.value;
     console.log(itemParaAdicionar);
     arrayListaComTodasTarefas.push(itemParaAdicionar);
     listaTarefas.appendChild(itemParaAdicionar);
     textoTarefa.value="";
     console.log(textoTarefa.value);
});