let textoTarefa = document.querySelector("#texto-tarefa");
let botaoCriarTarefa = document.querySelector("#criar-tarefa");
let listaTarefas = document.querySelector("#lista-tarefas");
let arrayListaTarefas = [];

// adiciona as tarefas na lista
botaoCriarTarefa.addEventListener("click", function(){
    let tarefas;
    tarefas = document.createElement("li");
    tarefas.className = "itens-lista";
    tarefas.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(tarefas);
    textoTarefa.value = "";
    arrayListaTarefas.push(tarefas);
    for(let index = 0; index < arrayListaTarefas.length; index += 1){
        arrayListaTarefas[index].addEventListener("click", function(){
            let item = arrayListaTarefas[index];
            item.style.backgroundColor = ''; 
            arrayListaTarefas[index].classList.add("classeFundoCinza");
        });
    }
})



// clicar em um item e alterar a cor de fundo para cinza
// criar uma classe com background-color: rgb(128, 128, 128)
// criar um for para passar por todos os elementos da ul
// add evento que exclui a classe de qualquer elemento
// add evento que, ao clicar no elemento da lista, essa classe seja add a ele.