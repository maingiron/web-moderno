// Object.preventExtensions
// Não deixa adicionar novos atributos ao objeto,
// somente excluir e alterar os atributos que existem
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

// Verifica se foi usado a função preventExtensions
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal
// Não deixa adicionar nem excluir atributos do objeto,
// somente alterar os atributos que existem
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)

// Verifica se foi usado a função seal
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
