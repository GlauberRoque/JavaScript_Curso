// importando as listas
const { EditoraFolha, EditoraGalho } = require('./arrays')

// declarando a função para juntar as duas lista em uma lista final 
function juntaListas(lista1, lista2)
{

    let listaFinal = []
    let atualLista1 = 0
    let atualLista2 = 0
    let atual = 0

    while (atualLista1 < lista1.length && atualLista2 < lista2.length)
    {
        
        let produtoAtualLista1 = lista1[atualLista1]
        let produtoAtualLista2 = lista2[atualLista2]

        if (produtoAtualLista1.valor < produtoAtualLista2.valor) 
        {
            listaFinal[atual] = produtoAtualLista1
            atualLista1++ 
        }else
        {
            listaFinal[atual] = produtoAtualLista2
            atualLista2++
        }

        atual++

    }

    while(atualLista1 < lista1.length){
        listaFinal[atual] = lista1[atualLista1]
        atualLista1++
        atual++
    }    

    while(atualLista2 < lista1.length){
        listaFinal[atual] = lista1[atualLista2]
        atualLista2++
        atual++
    }   

    return listaFinal
}

console.log(juntaListas(EditoraFolha, EditoraGalho))