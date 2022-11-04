const listaLivros = require('./array')
const trocarLugar = require('./EncontrarMenores')

function quickSort(array, esquerda, direita){

    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita)

        if(esquerda < indiceAtual -1){
            quickSort(array, esquerda, indiceAtual - 1)
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
        }

    }

return array
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda 
    let atualDireita = direita

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].valor < pivo.valor){
            atualEsquerda++
        }

        while(array[atualDireita].valor > pivo.valor){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita){
            trocarLugar(array, atualEsquerda, atualDireita)
            atualEsquerda++
            atualDireita--
        }

    }
    return atualEsquerda
}

console.log(quickSort(ListaLivros, 0, listaLivros.length - 1))