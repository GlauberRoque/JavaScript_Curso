const livros = require('./ListaLivros')
const menorValor = require('./menorValor')


for(let atual = 0; atual < livros.length; atual++ )
{
    let menor = menorValor(livros, atual)

    let livroatual = livros[atual]
    let livroMenorPReco = livros[menor]

    livros[atual] = livroMenorPReco
    livros[menor] = livroatual
}

console.log(livros)