// pessoa -> Endereço de memória 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> Endereço de memória 456 -> {...}
// pessoa.nome = { nome: 'Ana' }

// Congela o objeto e não deixa alterar mais ele
Object.freeze(pessoa)
pessoa.nome = 'Giron'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'João'
console.log(pessoaConstante)