const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(` Antes a sala tinha esses alunos: ${listaDeChamada}`)

//retirando Ana e Caio
listaDeChamada.splice(1, 2, 'Rodrigo')
//Adicionando Rodrigo

console.log(`Lista atualizada: ${listaDeChamada}`)