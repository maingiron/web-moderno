const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incrementar()
contadorA.incrementar()
console.log(contadorA.valor, contadorB.valor)

contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor)