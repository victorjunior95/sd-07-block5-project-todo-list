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

let apagarLista = document.querySelector("#apagar-tudo");
apagarLista.addEventListener("click", function() {
    ////daqui pra baixo, a solução foi retirada e adaptada de https://www.w3schools.com/JSREF/met_node_removechild.asp
    let list = document.getElementById("lista-tarefas");
    //primeiro encontra o elemento pai 'ol' com id'lista-tarefas'
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    } // enquanto o elemento ol tiver filhos, eles serão exlcluidos.
});