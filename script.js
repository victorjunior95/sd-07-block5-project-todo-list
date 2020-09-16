let buttonToAdd = document.getElementById("criar-tarefa")
let orderedListElement = document.getElementById("lista-tarefas")
let array = [];
let li = document.getElementsByTagName("li");

buttonToAdd.addEventListener('click', function () {

  let textTasks = document.getElementById("texto-tarefa");
  array.push(textTasks.value);
  let elementLi = document.createElement("li")
  elementLi.className = "tarefa";
  let counter = 0;

  elementLi.addEventListener('click', function (event) {
    removeSelected(li);
    elementLi.classList.add("selecionada");
  });

  elementLi.addEventListener('dblclick', function (event) {
    counter += 1;
    if (counter == 1) {
      event.target.classList.add("completed");
    } else {
      event.target.classList.remove("completed");
      counter = 0;
    }
  })

  orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
  textTasks.value = "";
})

//Deixar apenas um elemento selecionado:

function removeSelected(li){
  for (let index = 0; index < li.length; index++) {
    li[index].classList.remove("selecionada");
  }
}

//Função para apagar tudo:

let buttonRemoveAll = document.getElementById("apaga-tudo");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);

  }
}

function clearArrayContent(array){
 for (let index = 0; index < array.length; index++) {
   array.pop();
 }
}

//Após clicar no botão, tudo dentro da lista será removido:
buttonRemoveAll.addEventListener('click', function () {
  removeAllChildNodes(orderedListElement);
  clearArrayContent(array);
})

//Após clicar no botão, os itens com a classe "completed", serão removidos.
//Fonte: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

let elementsClassCompleted = document.getElementsByClassName("completed");
let buttonRemoveClassCompleted = document.getElementById("remover-finalizados");

//Explicação: Após executar um clique no botão com id="remover-finalizados", a função executará a estrutura de repetição while. Enquanto o tamanho do vetor elementsClassCompleted for maior que 0,
//quer dizer que ainda há elementos pertencentes à classe completed dentro do array. Desta forma, dentro da estrutura, o elemento raiz do elemento filho será acessado, sendo removido o primeiro filho.
//Isto será executado até não haver mais elementos filhos dentro do array.

buttonRemoveClassCompleted.addEventListener('click',function(){
  while(elementsClassCompleted.length>0){
    elementsClassCompleted[0].parentNode.removeChild(elementsClassCompleted[0]);
  }
})

//Após clicar no botão, os itens com a classe "selecionada", serão removidos.
let elemetsClassSelecionada = document.getElementsByClassName("selecionada");
let buttonRemoveClassSelecionada = document.getElementById("remover-selecionado");

buttonRemoveClassSelecionada.addEventListener('click', function(){
  while(elemetsClassSelecionada.length>0){
    elemetsClassSelecionada[0].parentNode.removeChild(elemetsClassSelecionada[0]);
  }
})

