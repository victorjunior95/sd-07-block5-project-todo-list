function addToDo() {
  const input = document.querySelector("#texto-tarefa");
  const ol = document.querySelector("ol");
  const li = document.createElement("li");
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = "";
  li.addEventListener('click', () => selectLi(li));
}

function selectLi(selectedLi) {
  document.querySelectorAll('li').forEach(li => {
    if (selectedLi === li) {
      li.classList.toggle('li-clicked');
    } else {
      if (li.classList.contains('li-clicked')) {
        li.classList.remove('li-clicked');
      }
    }
  })
}

document.body.onload = function () {
  document.querySelector("#criar-tarefa").addEventListener("click", addToDo);
};
