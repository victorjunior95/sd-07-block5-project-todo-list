let itens = [{id: "0", class: "item-tarefa", content: "1"},
{id: "1", class: "item-tarefa", content: "2"},
{id: "2", class: "item-tarefa completed", content: "3"},
{id: "3", class: "item-tarefa completed", content: "4"},
{id: "4", class: "item-tarefa", content: "5"},
{id: "5", class: "item-tarefa completed", content: "6"},
{id: "6", class: "item-tarefa", content: "7"},
{id: "7", class: "item-tarefa", content: "8"},
{id: "8", class: "item-tarefa", content: "9"}];

let removeCompleted = itens.filter((completed) => {
  return completed.class !== 'item-tarefa completed';
})

console.log(removeCompleted)