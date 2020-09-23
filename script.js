let botaoCriarTarefa = document.getElementById('criar-tarefa');
let botaoApagaTudo = document.getElementById('apaga-tudo');
let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
let inputTarefa = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let textoInput = document.getElementById('texto-tarefa')


function criarTarefa()
{
    
    let topicoLista = document.createElement("li");
    listaTarefas.appendChild(topicoLista);
    listaTarefas.innerText = textoInput.value;
    textoInput.value="";
    conteudo.addEventListener("click", seleçãoTarefa);
    conteudo.addEventListener("click", tarefaCompleta);
    
}

function apagaTudo()
{

}

function removerFinalizados()
{

}

function salvarTarefas()
{

}

function limpaTexto()
{

}
