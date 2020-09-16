let texto = document.querySelector("#texto-tarefa");
let criar = document.querySelector("#criar-tarefa");
let lista = document.querySelector("#lista-tarefas");

criar.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = texto.value;
    lista.appendChild(li);
});