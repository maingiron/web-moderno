const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(saudacao('Raphael'))

app.use('/opa', (req, res, next) => {
  console.log('Antes')
  next()
})

app.get('/clientes/relatorios', (req, res) => {
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  // let corpo = ''
  // req.on('data', (parte) => {
  //   corpo += parte
  // })

  // req.on('end', () => {
  //   res.send(corpo)
  // })
  res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
  res.json({
    data: [
      {id: 7, name: 'Ana', position: 1 },
      {id: 34, name: 'Bia', position: 2 },
      {id: 73, name: 'Carlos', position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })
  next()
  // res.json({
  //   nome: "Raphel Giron",
  //   profissao: "Analista de Sistema"
  // })
  // res.send('Estou bem')
})

app.use('/opa', (req, res) => {
  console.log('Depois')
})

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
})