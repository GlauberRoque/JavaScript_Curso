const cliente = {
    nome: 'Tayga',
    idade: 27,
    email: 'tayga_rayanne@hotmail.com',
    cpf: '12345678901',
    fones: ["81988745896", "81985476325"]
}

// Criando o objeto DEPENDENTE no objeto CLIENTE
cliente.dependente = {
    nome: 'Testa',
    parentesco: 'Irmã',
    dataNascimento: '25/10/1998'
}

console.log(cliente)

// Acessando e alterando o nome do objeto DEPENDENTE dentro do CLIENTE
cliente.dependente.nome = 'Lorrane'

console.log('-----------------------------')
console.log(cliente 
    )