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
//defininindo uma nova função 
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    //metodo CALL chama o construtor CLIENTE para o novo cliente poupança
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup

}

const novoCliente = new ClientePoupanca('tayga', '10624596521', 'tayga@teste.com', 400, 500)

console.log(novoCliente)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

novoCliente.depositarPoup(200)
console.log(novoCliente)