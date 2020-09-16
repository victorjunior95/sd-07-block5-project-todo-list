let listaTarefas = document.querySelector('#lista-tarefas');
let criarTarefaBotton = document.querySelector('#criar-tarefa');
let apagaTudoBotton = document.querySelector('apaga-tudo');
let removerFinalizadosBotton = document.querySelector('#remover-finalizados')
let itemSelect = '';
let lista = '';
let finalizados = '';
function criarLi(){
    criarTarefaBotton.addEventListener('click',function(){
        let li = document.createElement('li');
        li.innerText = document.querySelector('#texto-tarefa').value;
        li.addEventListener('click',function(){
            intemSelect = document.querySelector('.selected');
            if (itemSelect != null) {
                itemSelect.classList.remove('selected');
            }
            li.classList.add('selected');
            itemSelect = li;
            console.log(itemSelect);
        });
        li.addEventListener('dblclick', function () {
            if (li.classList.contains('completed')) {
              li.classList.remove('completed');
            } else {
              li.classList.add('completed');
            }
          }); 
          listaTarefas.appendChild(li);
          document.querySelector('#texto-tarefa').value = '';
    });
}