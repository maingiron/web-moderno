// Sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})