const CaixaTexto = document.getElementById('texto-tarefa');
const bot = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const filhos = lista.children;
function apagar() {
  for (let index = 0; index < filhos.length; index++) {
    filhos[index].className = 'item';
  }
}
function atributo() {
  for (let NDA = 0; NDA < filhos.length; NDA += 1) {
    filhos[NDA].addEventListener('click', function () {
      apagar();
      event.target.className = 'slecionado';
    });
  }
}

function criarTarefa() {
  bot.addEventListener('click', function () {
    let texto = CaixaTexto.value;
    const item = document.createElement('li');
    item.innerText = texto;
    lista.appendChild(item);
    CaixaTexto.value = '';
    atributo();
  });
}

window.onload = function () {
  criarTarefa();
}
