let buttonTarefa = document.getElementById(`criar-tarefa`);

let ordinal = document.createElement(`OL`);
ordinal.setAttribute(`id`, `lista-tarefas`);
document.getElementById(`lista`).appendChild(ordinal);

buttonTarefa.addEventListener(`click`, function(){
  let input = document.getElementById(`texto-tarefa`).value;
  let linha = document.createElement(`LI`);
  linha.addEventListener(`click`, function(event){
    event.target.className += ` selected`;
  })
  
  let texto = document.createTextNode(input);
  linha.appendChild(texto);
  document.getElementById(`lista-tarefas`).appendChild(linha);  
  document.getElementById(`texto-tarefa`).value = ``;
  let clear = document.getElementById(`texto-tarefa`).value;
})

