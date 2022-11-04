const alunos = ['Glauber', 'Tayga', 'Eduardo', 'Ludmilla', 'Maria Clara']

const notas = [9, 8.5, 6, 7, 10]

let listaAlunosNotas = [alunos, notas]

function localizar(nomeDoAluno) {

    if (listaAlunosNotas[0].includes(nomeDoAluno)) {
        
        indice = listaAlunosNotas[0].indexOf(nomeDoAluno)
        return listaAlunosNotas[0][indice] + ' , sua media é ' + listaAlunosNotas[1][indice]
    }    else {
        return 'Aluno não cadastrado!' 
    }
    
}

console.log(localizar('Glauber'))
console.log(localizar('Tayga'))
console.log(localizar('Vinicius'))

