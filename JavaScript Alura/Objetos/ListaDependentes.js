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
    }]
}

//inserindo um novo dependente para a lista de objetos DEPENDENTE
cliente.dependente.push({
    nome: 'Maria',
    parentesco: 'Mãe',
    dataNascimento: '06/02/1965'
})

// Usando um filtro para retornar o valor desejado
const dependenteMaisNovo = cliente.dependente.filter(dependente => dependente.dataNascimento === '25/10/1998')
console.log(dependenteMaisNovo[0].nome)

console.log(cliente)





