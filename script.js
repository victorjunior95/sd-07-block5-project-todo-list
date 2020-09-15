const CaixaTexto = document.getElementById('texto-tarefa');
const bot = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
function criarTarefa() {
  bot.addEventListener('click', function () {
    let texto = CaixaTexto.value;
    const item = document.createElement('li');
    item.innerText = texto;
    lista.appendChild(item);
    CaixaTexto.value = '';
  });
}

window.onload = function () {
  criarTarefa();
}
