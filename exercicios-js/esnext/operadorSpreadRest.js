// Operador ... rest (juntar) e spread (espalhar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.90 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)