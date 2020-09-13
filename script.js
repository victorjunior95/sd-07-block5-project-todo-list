//os itens da lista **não tem** o estilo CSS `background-color: rgb(128, 128, 128)`
//Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

//### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

//- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`

//id="criar-tarefa" , um novo item deve ser criado ao final da lista e o texto do input deve ser limpo
//id `remover-finalizados` elementos completos

//Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?
const criarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
let li = document.createElement('li');
let listaTarefas = document.querySelector("#lista-tarefas");
        
function InputTextField () {
    textoTarefa.addEventListener('keydown', () => {
        textoTarefa = document.querySelector("#texto-tarefa");
    })
}

function listTask () {
    criarTarefa.addEventListener('click', () => {
        listaTarefas = document.querySelector("#lista-tarefas");
        li = document.createElement('li');
        li.innerHTML = textoTarefa.value;
        listaTarefas.appendChild(li);
        textoTarefa.value = '';
    })
}

//Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item


//apagar tudo
function func () {
    listaTarefas.innerHTML = "";   
}
function apagarTudo () {
    const apague = document.querySelector("#apaga-tudo");
    apague.addEventListener('click', () => {
        const killLi = func();
    })
}





window.onload = () => {
    InputTextField ()
    listTask ()
    apagarTudo ()
}