let botaoAddTarefa = document.querySelector("#criar-tarefa");
let caixaTextoTarefa = document.querySelector("#texto-tarefa");
let listaDeTarefas = document.querySelector("#lista-tarefas");

botaoAddTarefa.addEventListener('click',function adicionandoTarefa(){ 
    let novaTarefa  = document.createElement('li')
    novaTarefa.innerText = caixaTextoTarefa.value
    novaTarefa.addEventListener('click', selecionar);
    novaTarefa.addEventListener('dblclick', concluir); 
    listaDeTarefas.appendChild(novaTarefa);
    caixaTextoTarefa.value = '';
});

function selecionar() {
    this.classList.add('selected');
}
  
function concluir() {
    this.classList.remove('selected');
    this.classList.add('completed');
}
