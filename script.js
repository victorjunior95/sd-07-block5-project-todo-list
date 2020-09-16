let textoTarefa = document.querySelector("#texto-tarefa");
let botaoCriarTarefa = document.querySelector("#criar-tarefa");
let listaTarefas = document.querySelector("#lista-tarefas");
let tarefas;

botaoCriarTarefa.addEventListener("click", function(){
    tarefas = document.createElement("li");
    tarefas.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(tarefas);
    console.log(tarefas)
    textoTarefa.value = "";
})

// digitar o texto no input 
// clicar no botão - evento de pegar o texto de input e colocar na listaTarefas. 
// Manter todos os itens na lista 