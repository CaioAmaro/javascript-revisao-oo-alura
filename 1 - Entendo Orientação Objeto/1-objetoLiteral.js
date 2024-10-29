const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

function exibirNome(){
    console.log(this.nome);
}

const exibir = exibirNome.bind(user);

exibir();
