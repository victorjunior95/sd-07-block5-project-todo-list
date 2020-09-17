function criarLi() {
  let minhaLista = document.getElementById('lista-tarefas');
  let novaLi = document.createElement('li');
  novaLi.innerHTML = document.getElementById('texto-tarefa').value;
  minhaLista.appendChild(novaLi);
  document.getElementById('texto-tarefa').value = '';
  mudaCorDoBackground();
}


function mudaCorDoBackground() {
  let tarefas = '';
  tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].addEventListener('click', function () {

      let itemSelecionado = document.querySelector('.selecionado');
      if (itemSelecionado == null) {
        tarefas[i].classList.add('selecionado');

      } else {
        if (itemSelecionado != tarefas[i]) {
          itemSelecionado.classList.remove('selecionado');
          tarefas[i].classList.add('selecionado');
        }
      }
    });
  }
}
