const filhas = ['Joana', 'Larissa']
const filhos = ['João', 'Fernando']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]], 7, [[4, 7]]))