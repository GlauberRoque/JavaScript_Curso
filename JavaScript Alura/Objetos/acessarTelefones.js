// criação do objeto
const cliente = {
    nome: 'Tayga',
    idade: 27,
    email: 'tayga_rayanne@hotmail.com',
    cpf: '12345678901',
    fones: ["81988745896", "81985476325"]
}

//acessando dados de um array dentro do objeto
console.log(cliente.fones[1])

// acesando os valores do array usando o forEach
cliente.fones.forEach(fone => console.log(fone));
