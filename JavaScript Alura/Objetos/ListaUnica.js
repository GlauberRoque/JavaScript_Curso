const clientes = [
    {
        nome: "Glauber",
        cpf: "10265478521",
        dependentes: [{
            nome: "Edila",
            parentesco: "Mãe",
            dataNasc: '16/04/1970'
        }]
    },
    {
        nome: "Tayga",
        cpf: "12569875321",
        dependentes: [{
            nome: "Maria",
            parentesco: "Mãe",
            dataNasc: '16/04/1970'
        },
        {
            nome: "Antonio",
            parentesco: "Pai",
            dataNasc: '16/04/1970'
        }
    ] 
    }
]

// os trÊs pontinhos (...) é o operador de espalhamento, Este operador copia as propriedades de objetos para outros
const listDeendentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listDeendentes)