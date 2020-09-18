let textInput = document.getElementById('texto-tarefa'),
    taskList  = document.getElementById('lista-tarefas'),
    clearBtn  = document.getElementById('remover-finalizados'),
    addBtn    = document.getElementById("criar-tarefa"),
    rmvBtn    = document.getElementById('apaga-tudo');

function createItem () {

  let element = taskList ,
      text = textInput.value;
  textInput.value = "";

  if( text == "" ){
    
    textInput.className = "errorClass";
  
  }
  else {

    let item = document.createElement('li');
    item.innerHTML = text;
    item.addEventListener("click", getClickItem );
    element.appendChild(item);

    textInput.className = "inputClass";

  };
};

//11 - - Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista
function deleteList () {};

//- 10 - Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
function clearList () {};

function itemSelected (elementClass) {


    
/*
### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
##### As seguintes verificações serão feitas:

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.

### 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).

*/

  /*
  
  ### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

##### As seguintes verificações serão feitas:

- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`.
- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`
- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo
  
  */



};

function  getClickItem(element) {

  let elementClass = element.target.className,
      item = element;

  switch (elementClass) {

    case 'selected' :
      item.target.className = 'completed';
      break

    case 'completed' :
      item.target.className = '';
      break

    default : 
      item.target.className = 'selected';

  };


};

function createEvents () {

  addBtn.addEventListener("click", createItem );

  rmvBtn.addEventListener("click", deleteList );

  clearBtn.addEventListener("click", clearList );

};

window.addEventListener('DOMContentLoaded', () => { 

  createEvents ();

});