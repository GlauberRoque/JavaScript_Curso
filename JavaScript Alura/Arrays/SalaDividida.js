//Diividindo arrays com slice

const nomes = ['Glauber', 'Tayga', 'Lud', 'Edu', 'Clarinha', 'Jucelio', 'Luzielma', 'Marcos', 'Gaby', 'Edverto', 'Amanda']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)