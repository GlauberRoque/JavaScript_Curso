const listaLivros = require('./array')

function encontraMenores(pivo, array){
    let menores = 0

    for(let atual = 0; atual < array.length; atual++ ){
        let produtoAtual = array[atual]

        if(produtoAtual.valor < pivo.valor){
            menores++
        }

    }
    trocarLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocarLugar(array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

//função para pegar ovalor do meio e usar como pivo para a ordenação
function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length/2)]
    encontraMenores(pivo, array)

    let valoresMenores = 0
    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando]
        if(atual.valor <= pivo.valor && atual !== pivo){
        trocarLugar(array, analisando, valoresMenores)
        valoresMenores++
     }
    }
    
}
console.log(encontraMenores(listaLivros[0], listaLivros))

module.exports = trocarLugar