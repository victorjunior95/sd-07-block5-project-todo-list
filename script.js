// Função para inserir tarefa
const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
  elementosLista();
});
// Função para remover todos os itens da lista
const botaoLimpaLista = document.getElementById('apaga-tudo');
botaoLimpaLista.addEventListener('click', function () {
  const itemTarefa = document.getElementById('lista-tarefas');
  while (itemTarefa.firstChild) {
    itemTarefa.removeChild(itemTarefa.firstChild);
  }
});
// Função para mudar a cor de fundo de item selecionado
function elementosLista () {
  let selecionaItem = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < selecionaItem.length; index += 1) {
    selecionaItem[index].addEventListener('click', function () {
      for ( let index = 0; index < selecionaItem.length; index += 1) {
        document.getElementById('lista-tarefas').children[index].removeAttribute('class');
      }
      document.getElementById('lista-tarefas').children[index].setAttribute('class', 'selected');
    });
  }
}  
// Função para remover finalizados
selecionaItem = document.getElementById('lista-tarefas').children;
for (let index = 0; index < selecionaItem.length; index += 1) {
  let selecionado = document.getElementById('lista-tarefas').children[index];
  if (selecionado.hasAttributes = 'selected') {
    console.log(selecionado);
  }
}
