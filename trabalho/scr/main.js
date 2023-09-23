const gerenciarTarefa = require("./gerenciarTarefa");
const gerenciador = new gerenciarTarefa();
const readline = require('readline');
const entry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function Menu () {
    console.log("\n")
    console.log("Bem-vindo, usuário! Somos a Joycex, uma empresa comprometida para a gerência de tarefas. \nVou te apresentar a opções do Menu:")
    console.log("Opção 1: Adicionar uma nova tarefa.")
    console.log("Opção 2: Visualizar a lista de tarefas.")
    console.log("Opção 3: Atualizar o status de uma tarefa.")
    console.log("Opção 4: Excluir uma tarefa.")
    console.log("Opção 5: Sair do Menu.")
    entry.question('Escolha uma das opções: ', (entrada) => {
        entrada = parseInt(entrada);
        switch(entrada){
            case 1:
                entry.question('Entre com o titulo:', (nome) => {
                    entry.question('Entre com a descrição:', (descrição) => {
                        entry.question('Entre com o status da tarefa:',(status) => {
                            const tarefa = gerenciador.adicionarTarefa(nome,descrição,status);
                            console.log(tarefa)
                            Menu()
                        })
                    })
                })
                break;
            case 2:
                console.log("Lista de tarefas seria:")
                const lista = gerenciador.visualizarTarefas();
                console.log(lista)
                Menu();
                break;
            case 3:
                entry.question('Entre com o titulo da tarefa para atualizar o status:', (nome) => {
                    entry.question('Entre com o status para trocar:',(status) => {
                        const tarefa = gerenciador.atualizarTarefa(nome,status);
                        console.log(tarefa)
                        Menu()
                    })
                })
                break;
            case 4:
                entry.question('Entre com o titulo da tarefa para deletar:',(nome) => {
                   const tarefa = gerenciador.deletarTarefa(nome);
                   console.log(tarefa)
                    Menu()
                })
                break;
            case 5:
                console.log("Adeus. Joycex agradece por usar nossa plataforma.")
                entry.close();
                break;
            default:
                console.log("A entrada que você colocou é invalida.")
                Menu()
                break;
        }
    })
}
Menu()
