
// criando uma função construtora para criar um objeto cliente
function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor){
        this.saldo += valor
    }

}

const glauber = new Cliente('Glauber', '02598745136', 'teste@teste.com', 500)

console.log(glauber)