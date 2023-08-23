class Filme {
    constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.duracao = duracao
        this.assistido = assistido
        this.avaliacao = avaliacao
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

    Assistir(assistido) {
        if (assistido == "SIM" || assistido == "sim") {
            console.log("Foi assistido")
        }
        else {
            console.log("Não foi assistido")
        }
    }

    AvaliarFilme(nota) {
        this.avaliacao = nota
        return nota
    }
}

const filme1 = new Filme("Joyce", 1400, "Romance", "1 minuto", "sim", 5);
const filme2 = new Filme("Narnia", 2002, "Ficção", "2 horas", "sim", 9)
const filme3 = new Filme("Harry Potter", 2010, "Fantasia", "3 horas", "não", 8)

filme1.DetalhesFilme();
filme1.Assistir();
console.log(filme1.AvaliarFilme(10))

console.log(" ------------------ ")
filme2.DetalhesFilme();
filme2.Assistir();

console.log(" ----------------- ")
filme3.DetalhesFilme();
filme3.Assistir();