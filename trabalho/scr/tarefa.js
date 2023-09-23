class tarefa {
    constructor(name,descrição,status){
        this.name = name;
        this.descrição = descrição;
        this.status = status;
    }

    returnName(){
        return this.name;
    }

    returnDescription(){
        return this.descrição;
    }

    returnStatus(){
        return this.status;
    }
    updateName(name){
        this.name = name;
    }

    updateDescription(descrição){
        this.descrição = descrição;
    }

    updateStatus(status){
        this.status = status;
    }
}
module.exports = tarefa;