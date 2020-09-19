let textoTarefa = document.querySelector("#texto-tarefa");
let botaoCriarTarefa = document.querySelector("#criar-tarefa");
let listaTarefas = document.querySelector("#lista-tarefas");
let botaoApagar = document.querySelector("#apaga-tudo");
let botaoFinalizadas = document.querySelector("#remover-finalizados");
let arrayListaTarefas = [];

// adiciona as tarefas na lista
botaoCriarTarefa.addEventListener("click", function(){
    let tarefas;
    tarefas = document.createElement("li");
    tarefas.className = "itens-lista";
    tarefas.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(tarefas);
    textoTarefa.value = "";
    tarefas.addEventListener("dblclick", tarefaCompleta);
    arrayListaTarefas.push(tarefas);
    for(let index = 0; index < arrayListaTarefas.length; index += 1){
        arrayListaTarefas[index].addEventListener("click", function(){
            for(let j = 0; j < arrayListaTarefas.length; j += 1){
                if(arrayListaTarefas[j].classList.contains("classeFundoCinza")){
                    arrayListaTarefas[j].classList.remove("classeFundoCinza");
                };
            arrayListaTarefas[index].className += " classeFundoCinza";
            };
        });
    }    
});

function tarefaCompleta(event){
    let itemSelecionado = event.target;
    if(itemSelecionado.classList.contains("completed")){
        itemSelecionado.classList.remove("completed");
    } else {
        itemSelecionado.className += " completed";
    };
};

botaoApagar.addEventListener("click", apagaTudo);
function apagaTudo(){
    listaTarefas.innerHTML = "";
}

function apagaFinalizadas(){
    let arrayAtualizada = document.querySelectorAll('.completed');
    for(index = 0; index < arrayAtualizada.length; index += 1){
        listaTarefas.removeChild(arrayAtualizada[index]);    
    }


}
/*function apagaFinalizadas(){
       const arrayAtualizada = document.querySelectorAll('li');
        for(index = 0; index < arrayAtualizada.length; index += 1){
            let indice = arrayAtualizada[index];
            if(indice.classList.contains("completed")){
                listaTarefas.removeChild(indice);
            };
        };        
    };   */
botaoFinalizadas.addEventListener("click", apagaFinalizadas);


let botaoConsole = document.querySelector("#botao-console");
botaoConsole.addEventListener('click', function(){
    let body = document.querySelector("body");
    console.log(body);
    console.log(listaTarefas);
    
});


// clicar em um item e alterar a cor de fundo para cinza
// criar uma classe com background-color: rgb(128, 128, 128)
// criar um for para passar por todos os elementos da ul
// add evento que exclui a classe de qualquer elemento
// add evento que, ao clicar no elemento da lista, essa classe seja add a ele.