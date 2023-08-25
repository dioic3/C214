class Filme {
    constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.duracao = duracao
        this.assistido = assistido
        this.avaliacao = avaliacao
    }
    //Exibir um menu
    exibirMenu() {
        console.log("Menu:");
        console.log("1. Adicionar um novo filme");
        console.log("2. Marcar um filme como assistido");
        console.log("3. Avaliar um filme");
        console.log("4. Exibir a lista de filmes");
        console.log("5. Sair do programa");
    }
    // Função para adicionar um novo filme
    adicionarFilme() {
        const nomeDoFilme = prompt("Digite o nome do filme:");
        return nomeDoFilme;
    }
    //Exibir detalhes do filme 
    DetalhesFilme() {
        console.log("Titulo do Filme:", this.titulo)
        console.log("Ano do Filme:", this.ano)
        console.log("Genêro do filme:", this.genero)
        console.log("Duração do filme:", this.duracao)
        console.log("Se foi assistido:", this.assistido)
        console.log("Qual é a avaliação?", this.avaliacao)
    }
    //identificar se o filme está com assistido
    Assistir(assistido) {
        if (assistido == "SIM" || assistido == "sim") {
            console.log("Foi assistido")
        }
        else {
            console.log("Não foi assistido")
        }
    }
    //função para avaliar o filme
    AvaliarFilme(nota) {
        this.avaliacao = nota
        return nota
    }
    //função para marcar o filme como assistido
    marcarComoAssistido() {
        exibirListaDeFilmes();
        const indiceDoFilme = prompt("Digite o número do filme que deseja marcar como assistido:")

        if (indiceDoFilme == "assistido") {
            console.log("Seu filme foi marcado como assistido!")
            this.assistido = indiceDoFilme;
        } else {
            console.log("O filme foi marcado como não assistido");
        }
    }
    //Função para avaliar o filme
    avaliarFilme() {
        exibirListaDeFilmes();
        const indiceDoFilme = parseInt(prompt("Digite o número do filme que deseja avaliar:")) - 1;

        if (indiceDoFilme >= 0 && indiceDoFilme < listaDeFilmes.length) {
            const avaliacao = parseFloat(prompt("Digite a avaliação (de 1 a 5) para o filme:"));
            if (avaliacao >= 1 && avaliacao <= 5) {
                listaDeFilmes[indiceDoFilme].avaliacao = avaliacao;
                console.log("Filme avaliado com sucesso!");
            } else {
                console.log("Avaliação inválida! Deve ser um valor entre 1 e 5.");
            }
        } else {
            console.log("Número de filme inválido!");
        }
    }
    //função para exibir os filmes
    exibirListaDeFilmes() {
        console.log("\nLista de Filmes:");
        listaDeFilmes.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme.nome} - Assistido: ${filme.assistido ? 'Sim' : 'Não'} - Avaliação: ${filme.avaliacao || 'Não avaliado'}`);
        });
    }
}

const listaDeFilmes = new Filme;
let escolha = 0;
do {
    listaDeFilmes.exibirMenu();
    escolha = parseInt(prompt("Escolha uma opção:"));

    switch (escolha) {
        case 1:
            listaDeFilmes.adicionarFilme();
            break;
        case 2:
            listaDeFilmes.marcarComoAssistido();
            break;
        case 3:
            listaDeFilmes.avaliarFilme();
            break;
        case 4:
            listaDeFilmes.exibirListaDeFilmes();
            break;
        case 5:
            console.log("Saindo do programa. Até logo!");
            break;
        default:
            console.log("Opção inválida! Escolha uma opção válida.");
    }
} while (escolha !== 5);

