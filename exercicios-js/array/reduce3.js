Array.prototype.reduce2 = function(callback, valorIncial) {
    let indiceInicial = 0
    let acumulador = 0
    if (valorIncial === 0 || !!valorIncial) {
        indiceInicial = 0
        acumulador = valorIncial
    } else {
        indiceInicial = 1
        acumulador = this[0]
    }
    for (let i = indiceInicial; i < this.length ; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total * valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma))
console.log(nums.reduce2(soma))
