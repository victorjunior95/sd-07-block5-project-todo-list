document.querySelector('button').addEventListener('click', function () {
    const newTask = document.createElement('li');
    document.querySelector('ol').appendChild(newTask);
    newTask.innerText = document.querySelector('input').value;
    document.querySelector('input').value = "";
})