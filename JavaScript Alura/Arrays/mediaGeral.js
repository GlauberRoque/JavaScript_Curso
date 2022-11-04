const salaJS = [7, 8, 10, 5, 6, 9, 7.5]
const salaJava = [8, 9, 4, 6, 7.5, 8]
const salaPython = [10, 8, 5, 3, 7, 8 ,6]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
    atual + acumulador,0)
    return somaDasNotas / notasDaSala.length


}
console.log(`Média da sala de JS é ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java é ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python é ${mediaSala(salaPython)}`)