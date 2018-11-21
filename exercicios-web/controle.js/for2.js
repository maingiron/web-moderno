const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 56,
    peso: 48
}

for (let attr in pessoa) {
    console.log(`${attr} = ${pessoa[attr]}`)
}