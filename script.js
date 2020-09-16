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
      if (tarefas[i].style.backgroundColor === 'rgb(255, 255, 255)') {
        tarefas[i].style.backgroundColor = 'rgb(128, 128, 128)';
      } else {
        tarefas[i].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
}
