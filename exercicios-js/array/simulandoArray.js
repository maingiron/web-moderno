const quaseArray = { 0: 'Raphael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Raphael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)