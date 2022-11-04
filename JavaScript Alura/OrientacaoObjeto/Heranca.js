
// aqui a classe programador recebe todos as caracteristicas da classe pessoa
class Programador extends Pessoa
{

    constructor(nome, sobrenome, cpf, email, linguagem)
    {
        // o SUPER é usada para chamar o construtor da classe pessoa para a classe programador.
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem

    }

}