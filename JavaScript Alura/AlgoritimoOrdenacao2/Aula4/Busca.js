const listaLivros = require('./array')

function busca(array, de, ate, valorBuscado){
    const meio = Math.floor((de + ate) / 2)
    const atual = array[meio]

    if (de > ate){
        return -1
    }

    if (valorBuscado === atual.valor){
        return meio
    }else if(valorBuscado < atual.valor){
        
        return busca(array, de, meio - 1, valorBuscado)
    }else if(valorBuscado > atual.valor){
        return busca(array, meio + 1 , ate, valorBuscado)
    }

}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 28))