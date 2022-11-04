
//construindo uma classe
class Pessoa
{
// definindo um construtor nome, sobrenome, cpf e email são atributos da classe.
    constructor(nome, sobrenome, cpf, email)
    {

        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email

    }
// declaração de um metodo, ou um executor de uma ação
    exibirNomeCompleto()
    {

        console.log(`${this.nome} ${this.sobrenome}`)

    }

}