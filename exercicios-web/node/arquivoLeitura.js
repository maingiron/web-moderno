const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
console.log(caminho)

// Ler de forma síncrono... (não é muito interessante trabalhar dessa forma!)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Ler de forma assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Posso pegar um json dessa forma
const config = require('./arquivo.json')
console.log(config.db)

// Ler um diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})