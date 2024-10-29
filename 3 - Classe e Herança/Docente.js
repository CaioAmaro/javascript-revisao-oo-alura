import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso de  ${curso} 
        responsável  é ${this.nome}`;
    }
}

const novaDocente = new Docente('Ana', 'A@a.com', '2024-01-01');

console.log(novaDocente.aprovarEstudante('Juliana', 'JS'));
console.log(novaDocente.exibirInfos());