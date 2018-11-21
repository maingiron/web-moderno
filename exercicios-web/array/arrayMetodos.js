const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento!
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no último elemento!
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro elemento!
console.log(pilotos)

// Splice pode adicionar ou remover elementos!

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array!
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)