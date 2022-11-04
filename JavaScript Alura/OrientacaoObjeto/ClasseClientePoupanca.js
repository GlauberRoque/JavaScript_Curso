
// definição da classe cliente
class Cliente
{
    //definição das propriedades da classe
    constructor(nome, email, cpf, saldo)
    {

        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo

    }
    // definição dos metodos da classe
    depositar(valor)
    {
        this.saldo += valor
    }

    sacar(valor)
    {
        this.saldo -= valor
    }

    exibirSaldo()
    {
        console.log(this.saldo)
    }

}

class ClientePoupanca extends Cliente
{
    constructor(nome, email, cpf, saldo, saldoPoupanca)
    {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor)
    {
        this.saldoPoupanca += valor
    }

    sacarPoupanca(valor)
    {
        this.saldoPoupanca -= valor
    }

    exibirPoupanca()
    {
        console.log(this.saldoPoupanca)
    }

}

const tayga = new ClientePoupanca ('Tayga Rayanne', 'tayga@teste.com', '15487965230', 2000, 500)
console.log(tayga)
