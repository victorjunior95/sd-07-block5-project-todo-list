let goalText = document.getElementById('texto-tarefa');
let goalList = document.getElementById('lista-tarefas');
let addGoalButton = document.getElementById('criar-tarefa');
let addGoalToList = addGoalButton.addEventListener('click', addGoal);

function addGoal() {
    let goalTextToAdd = document.createElement('li')
    goalTextToAdd.innerHTML = goalText.value
    goalList.appendChild(goalTextToAdd)
    goalText.value = ''
}
