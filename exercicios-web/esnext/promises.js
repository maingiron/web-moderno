function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve aceita apenas um parâmetro
            // reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que maneiro!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))