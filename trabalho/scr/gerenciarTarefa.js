const Tarefa = require('./tarefa');
const TarefaObj = new Tarefa();

class GerenciarTarefa {
    constructor() {
        this.gerenciarTarefa = [];
    }

    // função para atualizar o status da tarefa
    atualizarTarefa(titulo,status) {
        const TarefaName = this.gerenciarTarefa.find((TarefaObj) => TarefaObj.returnName() === titulo);
        if(TarefaName){
            if (status === "A fazer" || status === "Em andamento" || status === "Concluída") {
                TarefaName.updateStatus(status);
                return `Tarefa com o status ${status} atualizado.`;
            } else {
                return "Entrada inválida. Entre somente com as mensagens 'A fazer', 'Em andamento' e 'Concluída'."
            }
        }
        else {
            return `Tarefa ${titulo} não encontrada`;
        }
    }

    // função para adicionar uma nova tarefa
    adicionarTarefa(nome, descrição, status) {
        if (status == "A fazer" || status == "Em andamento" || status == "Concluída") {
            const TarefaNova = new Tarefa(nome, descrição, status);
            this.gerenciarTarefa.push(TarefaNova);
            return "As informações foram armazenadas.";
        } else {
            return "Entrada inválida. Entre somente com as mensagens 'A fazer', 'Em andamento' e 'Concluída'."
        }
    }

    tamanhodaLista(){
        return this.gerenciarTarefa.length;
    }

    // função para visualizar uma nova tarefa
    visualizarTarefas() {
        const index = this.gerenciarTarefa.length;
        if(index !== 0){
            return this.gerenciarTarefa;
        }
        else {
            return "Infelizmente você não entrou com informação nenhuma. Por favor, adicione uma tarefa nova e depois peça para visualizar a lista.";
        }
    }

    // função para excluir a tarefa
    deletarTarefa(nome) {
        const indiceTarefa = this.gerenciarTarefa.findIndex((TarefaObj) => TarefaObj.returnName() === nome);
        if (indiceTarefa !== -1) {
            this.gerenciarTarefa.splice(indiceTarefa, 1); // Remove a tarefa da lista
            return `A tarefa ${nome} foi removida com sucesso.`;
        } 
        else {
            return `A tarefa ${nome} não foi encontrada na lista.`;
        }
    }

}
module.exports = GerenciarTarefa;
