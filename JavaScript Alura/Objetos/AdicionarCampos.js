
// criação do objeto
const cliente = {
    nome: 'Tayga',
    idade: 27,
    email: 'tayga_rayanne@hotmail.com',
    cpf: '12345678901'
}
console.log(cliente)
console.log('---------------------')

// adicionando o campo FONE ao objeto
cliente.fone = '81 981314738'
console.log(cliente)

// deletando um campo do objeto
delete cliente.cpf
console.log(cliente)
