
const precoLivros = require('./ListaLivros')
const livros = require('./ListaLivros')

function menorValor (arrProdutos, posicaoInicial){

//let atual = 0
let maisbarato = posicaoInicial
//let maiscaro = 0

for(let atual = posicaoInicial; atual < precoLivros.length; atual++)
{
    if(arrProdutos[atual].valor < arrProdutos[maisbarato].valor)
    {
        maisbarato = atual
    }
}
return maisbarato
}

module.exports = menorValor
/*for(let atual = 0; atual < precoLivros.length; atual++)
{
    if(precoLivros[atual].valor > precoLivros[maiscaro].valor)
    {
        maiscaro = atual
    }
}*/

//console.log(`O livro mais barato custa ${precoLivros[maisbarato].valor} 
//e o seu título é ${precoLivros[maisbarato].titulo}`)

//console.log(`O livro mais caro custa ${precoLivros[maiscaro].valor}
//e o seu título é ${precoLivros[maiscaro].titulo}`)