const { expect } = require('chai');
const GerenciarTarefa = require('../scr/gerenciarTarefa');

describe('Teste para verificar o Gerenciador de Tarefas',() => {
    describe('Testes para GerenciarTarefa', () => {
        it('Verificando se uma tarefa foi adicionada', () => {
            const gerenciarTarefa = new GerenciarTarefa();
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "A fazer");
            const tarefaAdicionada = gerenciarTarefa.gerenciarTarefa[0];
            const tamanho = gerenciarTarefa.tamanhodaLista();
            expect(tamanho).to.equal(1);
            expect(tarefaAdicionada.name).to.equal("Arrumar a geladeira");
            expect(tarefaAdicionada.descrição).to.equal("Está com defeito no capacitor");
            expect(tarefaAdicionada.status).to.equal("A fazer");
        });

        it('Verificando se a lista de tarefas foi retornada', () => {
            const gerenciarTarefa = new GerenciarTarefa();
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "A fazer");
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "Concluída");
            const listaDeTarefas = gerenciarTarefa.visualizarTarefas();
            expect(listaDeTarefas).to.be.an('array');
            expect(listaDeTarefas).to.have.lengthOf(2);
        });

        it('Verificando se a lista de tarefas retorna a mensagem sobre não ter nada', () => {
            const gerenciarTarefa = new GerenciarTarefa();
            const listaDeTarefas = gerenciarTarefa.visualizarTarefas();
            expect(listaDeTarefas).to.equal("Infelizmente você não entrou com informação nenhuma. Por favor, adicione uma tarefa nova e depois peça para visualizar a lista.")
        });

        it('Verificando se a lista de tarefas atualiza o status', () => {
            const gerenciarTarefa = new GerenciarTarefa();
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "A fazer");
            gerenciarTarefa.atualizarTarefa("Arrumar a geladeira","Concluída");
            const listaDeTarefas = gerenciarTarefa.visualizarTarefas();
            expect(listaDeTarefas[0].status).to.equal("Concluída")
        });

        it("Verificando se retornar mensagem de status errado",() => {
            const gerenciarTarefa = new GerenciarTarefa();
            const mensagem = gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "a fazer");
            expect(mensagem).to.equal("Entrada inválida. Entre somente com as mensagens 'A fazer', 'Em andamento' e 'Concluída'.")
        })

        it("Verificando se a tarefa foi deletada",() => {
            const gerenciarTarefa = new GerenciarTarefa();
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "A fazer");
            const mensagem = gerenciarTarefa.deletarTarefa("Arrumar a geladeira");
            expect(mensagem).to.equal("A tarefa Arrumar a geladeira foi removida com sucesso.")
        })
        
        it("Verificando se consigo deletar uma tarefa que não existe",() => {
            const gerenciarTarefa = new GerenciarTarefa();
            gerenciarTarefa.adicionarTarefa("Arrumar a geladeira", "Está com defeito no capacitor", "A fazer");
            const mensagem = gerenciarTarefa.deletarTarefa("Arrumar a televisão");
            expect(mensagem).to.equal("A tarefa Arrumar a televisão não foi encontrada na lista.")
        })
    });
})