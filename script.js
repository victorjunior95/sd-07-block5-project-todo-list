// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.querySelector('#criar-tarefa');

addBtn.addEventListener('click', function () {
    textInput.value = ' ';
})

// function resetInput () {
//     textInput.value = ' ';
//  }
 
// textInput.addEventListener('change', resetInput);
