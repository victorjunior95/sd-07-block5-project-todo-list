// Função para mudar a clase com 1 ou 2 cliques
function elementosLista (parametro) {
  parametro.addEventListener('click', function () {
    parametro.setAttribute('class', 'selected');
  });
  parametro.addEventListener('dblclick', function () {
    parametro.setAttribute('class', 'completed');
  });
}
// Função para inserir tarefa
const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
  removeClasse;
  elementosLista(novoItem);
});
// Função para remover todos os itens da lista
const botaoLimpaLista = document.getElementById('apaga-tudo');
botaoLimpaLista.addEventListener('click', function () {
  const itemTarefa = document.getElementById('lista-tarefas');
  while (itemTarefa.firstChild) {
    itemTarefa.removeChild(itemTarefa.firstChild);
  }
});
// Função para remover finalizados
removeCompleto = document.getElementById('remover-finalizados');
totalLista = document.getElementById('lista-tarefas').children.length;
removeCompleto.addEventListener('click', function () { 
  for (let index = 0; index < totalLista; index += 1) {
    const selecionado = document.getElementById('lista-tarefas').children[index];
    if (selecionado.hasAttributes == 'selected') {
      console.log("selecionado");
    }
  }
});
