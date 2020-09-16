class TodoListController {
  constructor() {
    this.lista = [];
    this.idEdicao = null;
    this.geradorDeId = 0;
  }

  lerTarefa() {
    let tarefa = {};
    tarefa.descricao = document.getElementById("texto-tarefa").value;
    tarefa.concluida = false;

    return tarefa;
  }

  validar(tarefa) {
    if (tarefa.descricao == "") {
      alert("O campo de descrição da tarefa é obrigatório!");
      return false;
    }

    return true;
  }

  adicionarTarefa() {
    console.log("tarefa sendo adiconada!!!");
    let tarefaRetornada = this.lerTarefa();

    if (this.validar(tarefaRetornada)) {
      if (this.idEdicao == null) {
        this.adicionar(tarefaRetornada);
      } else {
        this.salvarEdicao(tarefaRetornada);
      }

      this.limpar();
      this.construirLista();
    }
  }

  salvarEdicao() {}

  adicionar(tarefa) {
    tarefa.id = this.geradorDeId;
    this.geradorDeId++;

    this.lista.push(tarefa);
  }

  limpar() {
    document.getElementById("texto-tarefa").value = "";
    this.idEdicao = null;
  }

  construirLista() {
    let tabela = document.getElementById("tabelaTarefas");
    tabela.innerHTML = "";

    for (let i = 0; i < this.lista.length; i++) {
      let linha = tabela.insertRow();

      let celulaConcluida = linha.insertCell();
      let celulaDescricao = linha.insertCell();

      let imgConcluida = document.createElement("img");

      celulaDescricao.innerText = this.lista[i].descricao;

      if (this.lista[i].concluida) {
        imgConcluida.src = "img/checked.svg";
      } else {
        imgConcluida.src = "img/unchecked.svg";
      }

      imgConcluida.setAttribute(
        "onclick",
        `todoListController.alterarStatus(${this.lista[i].id})`
      );

      celulaConcluida.appendChild(imgConcluida);
    }
  }

  excluir(id) {
    if (confirm("Tem certeza que deseja excluir essa tarefa?")) {
      let i = 0;
      let achou = false;

      while (i < this.lista.length && !achou) {
        if (this.lista[i].id == id) {
          achou = true;
        } else {
          i++;
        }
      }

      if (achou) {
        this.lista.splice(i, 1);
        this.construirTabela();
      }
    }
  }

  editar(id) {}

  alterarStatus(id) {}

  moverParaCima(id) {}
  moverParaBaixo(id) {}
}

const controller = new TodoListController();
