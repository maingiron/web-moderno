// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec () {
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Giron',
    idade: 23,
    peso: 90,
    endereco: {
        logradouro: 'Rua Nair Jacinta',
        numero: 09
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)