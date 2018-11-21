const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo: Se importa mais com o como deve ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo: Se importa mais com o que deve ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total1 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1
// Nota que o SQL é uma linguagem mais declarativa... Não me importa como ela irá buscar os dados...