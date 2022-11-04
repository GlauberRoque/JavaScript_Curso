// Usando o FOR para imprimir os valores dentro do array
const numeros = [ 100 , 200, 300, 400, 500, 600]

for (let contador = 0; contador < numeros.length; contador++) {
    console.log(contador, numeros[contador])
    
}


// Tirando media usando o FOR
const notas = [ 10, 6.5, 8, 7.5]
let soma = 0

for (let contador = 0; contador < notas.length; contador++) {
    soma += notas[contador]
    
    
}
let media = soma / notas.length
console.log(`A soma de todas as notas é: ${soma}`)
console.log(`A media das notas é: ${media}`)

