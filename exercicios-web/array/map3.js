Array.prototype.map2 = function (callback) {
    const retorno = []
    for (let i = 0; i < this.length; i++) {
        retorno.push(callback(this[i], i, this))
    }
    return retorno
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const novo = carrinho.map2(function(produto) {
    return JSON.parse(produto).preco
})
console.log(novo)