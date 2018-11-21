// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma (3, 4))

// retorno implícito -- quando uma função tem apenas uma linha, o resultado é retornado....
const subtracao = (a, b) => a - b
console.log(subtracao(5, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal')