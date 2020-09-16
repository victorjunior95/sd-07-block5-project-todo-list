class TodoListController {
  constructor() {
    this.lista = [];
    this.idEdicao = null;
    this.geradorDeId = 0;
  }


lerTarefa(){}

validar(tarefa){}

adicionarTarefa(tarefa) {
    console.log('tarefa sendo adiconada!!!')
}

salvarEdicao(){}

limpar(){}

construirLista(){}

excluir(id){}

editar(id){}

alterarStatus(id){}

moverParaCima(id){}
moverParaBaixo(id){}

}

const controller = new TodoListController();
