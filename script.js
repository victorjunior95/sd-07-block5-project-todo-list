let botaoAddTarefa = document.querySelector("#criar-tarefa");
let caixaTextoTarefa = document.querySelector("#texto-tarefa");
let listaDeTarefas = document.querySelector("#lista-tarefas");



botaoAddTarefa.addEventListener('click',function adicionandoTarefa(){ 
    let novaTarefa  = document.createElement('li')
    novaTarefa.innerText = caixaTextoTarefa.value
    novaTarefa.addEventListener('click', selecionar);
    novaTarefa.addEventListener('dblclick', concluir); 
    listaDeTarefas.appendChild(novaTarefa);
    novaTarefa.classList.add("itens")
    caixaTextoTarefa.value = '';
    novaTarefa.addEventListener('click', function selecionarItem(){
      let selecionado = document.querySelector('.itens')
      selecionado.style.backgroundColor = 'rgb(128,128,128)';
    });
});

function selecionar() {
    this.classList.add('selected');

}
  
function concluir() {
    this.classList.remove('selected');
    this.classList.add('completed');
}

let apagaTudo = document.querySelector("#apaga-tudo");
apagaTudo.addEventListener('click', function apagarLista() {
  let itens = document.querySelectorAll(".itens");
    for (let i = 0; i < itens.length; i += 1){
          itens[i].remove();
    }
});
