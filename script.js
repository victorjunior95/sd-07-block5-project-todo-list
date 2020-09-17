let texto = document.querySelector("#texto-tarefa");
let criar = document.querySelector("#criar-tarefa");
let lista = document.querySelector("#lista-tarefas");

criar.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = texto.value;
    lista.appendChild(li);
    apagarTexto();
});

function apagarTexto() {
    texto.value = "";
}

let apagarLista = document.querySelector("#apaga-tudo");
apagarLista.addEventListener("click", function() {
    ////daqui pra baixo, a solução foi retirada e adaptada de https://www.w3schools.com/JSREF/met_node_removechild.asp
    let list = document.getElementById("lista-tarefas");
    //primeiro encontra o elemento pai 'ol' com id'lista-tarefas'
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    } // enquanto o elemento ol tiver filhos, eles serão exlcluidos.
});

lista.addEventListener("dblclick", function(event) {
    let riscado = document.querySelector(".completed");
    if (riscado != null) {
        riscado.classList.remove("completed");
    } else {
        let register = event.target;
        register.classList.add("completed");
    }
});
//solução adaptada a partir de https://github.com/tryber/sd-07-block5-project-todo-list/blob/749e0a187fda8965fd829f3b488dd175defa6c70/script.js

lista.addEventListener("click", function(event) {
    let riscado = document.querySelector(".selecionado");
    if (riscado != null) {
        riscado.classList.remove("selecionado");
    } else {
        let register = event.target;
        register.classList.add("selecionado");
    }
});

let apagarItem = document.querySelector("#remover-finalizados");

apagarItem.addEventListener("click", function() {
    let list = document.getElementsByClassName("completed");
    list[0].remove();
});