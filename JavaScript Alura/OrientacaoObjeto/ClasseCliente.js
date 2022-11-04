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

const glauber = new Cliente ('Glauber Roque', 'glauber@teste.com', '07412568548', '1000')

console.log(glauber)