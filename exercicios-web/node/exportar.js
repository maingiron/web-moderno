console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

// Esse objeto não será retornado, pois, exports é uma váriavel
// que não aponta para o mesmo endereço de memória de module.exports
exports = {
    nome: 'Teste'
}

console.log(module.exports)
console.log(exports)

module.exports = { publico: true }