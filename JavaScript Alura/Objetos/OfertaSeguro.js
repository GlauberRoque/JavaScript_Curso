const cliente = {
    nome: 'Tayga',
    idade: 27,
    email: 'tayga_rayanne@hotmail.com',
    cpf: '12345678901',
    fones: ["81988745896", "81985476325"],
    dependente: [{
        nome: 'Testa',
        parentesco: 'Irmã',
        dataNascimento: '25/10/1998'
    },
    {
        nome: 'Maria',
        parentesco: 'Mãe',
        dataNascimento: '06/02/1965'
    }],
    saldo: 500,

    //metodo para depositar dinheiro na atributo saldo
    depositar: function(valor){
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    // metodo keys retorna um array com os indice do objeto
    const propsClientes = Object.keys(obj)
        // metodo include verifica se existe dentro de um array o valor que passarmos como parametro!
        if(propsClientes.includes("dependente")){
            
            console.log(`Oferta de seguro de Vida para ${obj.nome}`)
        }else{
            console.log(`Oferta de seguro de Vida indisponível`)
        }

}

oferecerSeguro(cliente)
