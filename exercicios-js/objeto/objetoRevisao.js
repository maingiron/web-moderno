// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Evite isso, rs'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Giron',
        idade: 23,
        endereco: {
            logradouro: 'Nova Friburgo',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Giron',
            idade: 23
        },
        {
            nome: 'Lucinana',
            idade: 18
        }
    ],
    calcularValorSeguro: function () {

    }
}

carro.proprietario.endereco.numero = 1000

console.log(carro)

delete carro.condutores

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)