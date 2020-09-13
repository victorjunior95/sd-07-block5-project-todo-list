/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input */

let textoTarefa = document.getElementById("texto-tarefa");
let salvar = document.getElementById("criar-tarefa");

salvar.addEventListener("click", criarTarefa);

function criarTarefa() {
  if (textoTarefa.value === "") {
    return console.log("Campo vazio");
  }
  let lista = document.getElementById("lista-tarefas");
  let novoItem = document.createElement("li");
  novoItem.innerText = textoTarefa.value;
  lista.appendChild(novoItem);
  limparTexto();
  selecionarItem();
}

function limparTexto() {
  textoTarefa.value = "";
}

function selecionarItem() {
  document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      descelecionarItem();
      item.classList.add("backgroundItemList");
    });
  });
}

function descelecionarItem() {
  document.querySelectorAll("li").forEach((item) => {
    item.classList.remove("backgroundItemList");
  });
}
