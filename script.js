/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input */

let textoTarefa = document.getElementById('texto-tarefa');
let salvar = document.getElementById('criar-tarefa');

salvar.addEventListener('click', criarTarefa);

function criarTarefa(){
    let lista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');
    novoItem.innerText = textoTarefa.value;
    lista.appendChild(novoItem);
    limparTexto();
}

function limparTexto(){
    textoTarefa.value = "";
}