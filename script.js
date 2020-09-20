let texto = document.getElementById("texto-tarefa");
let criar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");

criar.addEventListener("click", function() {
    if (texto.value !== "") {
        let li = document.createElement("li");
        li.innerText = texto.value;
        lista.appendChild(li);
        texto.value = "";
        texto.focus();
    }
});

let apagarLista = document.querySelector("#apaga-tudo");
apagarLista.addEventListener("click", function() {
    ////daqui pra baixo, a solução foi retirada e adaptada de https://www.w3schools.com/JSREF/met_node_removechild.asp
    let list = document.getElementById("lista-tarefas");
    //primeiro encontra o elemento pai 'ol' com id'lista-tarefas'
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    } // enquanto o elemento ol tiver filhos, eles serão exlcluidos.
    //hasChildNodes(): https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
});

lista.addEventListener("dblclick", function(event) {
    if (document.getElementsByClassName("completed").length !== 0);
    let register = event.target;
    register.classList.add("completed");
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
    while (list.length !== 0) {
        list[0].remove();
    }
});