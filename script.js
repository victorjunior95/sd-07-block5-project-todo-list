let btCriarTarefa = document.getElementById('criar-tarefa');
let inpTextoTarefa = document.getElementById('texto-tarefa');
let olListaTarefa = document.getElementById('lista-tarefas');

console.log(inpTextoTarefa.value);

btCriarTarefa.addEventListener('click', function () {
  // Testar de input tem conteudo
  // criar li
  // pegar o conteudo input e colocar o conteudo dentro da li
  // adicionar a li como filha da ol
  // apagar o conteudo do input
  // colocar o foco no input (legal)
  if (inpTextoTarefa.value !== '') {
    let liTag = document.createElement('li');

    liTag.innerText = inpTextoTarefa.value
    // let text = document.createTextNode(inpTextoTarefa.value);
    // liTag.appendChild(text)

    olListaTarefa.appendChild(liTag);

    inpTextoTarefa.value = '';
  }
  inpTextoTarefa.focus();
});
