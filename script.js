// Referenciar/trazer os valores do HTML para (=) o JavaScript
let btCriarTarefa = document.getElementById("criar-tarefa");
// Para receber o valor digitado no input
let inpTextoTarefa = document.getElementById("texto-tarefa");
let olListaTarefa = document.getElementById("lista-tarefas");

// Para receber a ação (click) e realizar a função de adicionar o valor do input à orderList
btCriarTarefa.addEventListener("click", function () {
    // Testar se há conteúdo no input
    if (inpTextoTarefa.value !== "") {
        // criar o li
        let itemList = document.createElement("li");
        // add o conteudo na li
        /* let text = document.createTextNode(inpTextoTarefa.value);
        liTag.appendChild(text); */
        itemList.innerText = inpTextoTarefa.value;
        // add a li como filha da ol
        olListaTarefa.appendChild(itemList);
        // apagar o conteudo do input
        inpTextoTarefa.value = "";
    }
    // *perfumaria* colocar o foco no input
    inpTextoTarefa.focus();
})
