window.onload = function () {

  const textoTarefa = document.getElementById('texto-tarefa');
  const criarTarefa = document.getElementById('criar-tarefa'); // botão
  const listaTarefas = document.getElementById('lista-tarefas');

  textoTarefa.focus();

  listaTarefas.addEventListener('click', function () {
    event.stopPropagation();
    console.log(event.target.className)
    if (event.target.nodeName === 'LI') {
      alteraCorFundo(event.target);
    }
  })

  function criaLi() {
    let novoLi = document.createElement('li');
    novoLi.className = 'lista-tarefas-item'
    novoLi.textContent = textoTarefa.value;
    listaTarefas.appendChild(novoLi);
    textoTarefa.value = '';
    textoTarefa.focus();
  }

  function alteraCorFundo(elem) {
    elem.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  criarTarefa.addEventListener('click', criaLi);

  let itensLi = document.querySelectorAll('ol>li');
}
