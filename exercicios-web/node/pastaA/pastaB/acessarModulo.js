// const moduloA = require('../../moduloa') Funciona no MAC e Windows, porém, não funciona no Linux...
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const pastaC = require('./pastaC')
console.log(pastaC.ola2)

// Criei um módulo manualmente... (não faça isso, rs)
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Módulo que já vem no Node...
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)