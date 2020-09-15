// 5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
// As seguintes verificações serão feitas:

//     Será verificada a existência de um elemento do tipo button com o id criar-tarefa
//     No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
//     A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

let criartarefa = document.getElementById("criar-tarefa");
let listatarefa = document.getElementById("lista-tarefas");
let textotarefa = document.getElementById("texto-tarefa");

criartarefa.addEventListener("click", function() {

    let divNova = document.createElement("li");
    conteudoNovo = document.createTextNode(textotarefa.value);
    divNova.appendChild(conteudoNovo);
    listatarefa.appendChild(divNova);
    textotarefa.value="";
})

listatarefa.addEventListener("click",function(e) {

    let elements = document.querySelector("#lista-tarefas").children;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }

    let element = document.querySelector("#lista-tarefas");
    e.target.style.backgroundColor = "rgb(128, 128, 128)";
})
