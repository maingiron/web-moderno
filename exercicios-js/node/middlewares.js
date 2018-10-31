// Middleware pattern (também chamado como: chain of reponsibility)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'middleware1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'middleware2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'middleware3'

const executavel = (contexto, ...middlewares) => {
    const executarPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const ctx = {}
executavel(ctx, passo1, passo2, passo3)
console.log(ctx)