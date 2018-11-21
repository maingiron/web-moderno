const desafio = () => {
    let arr = []
    let valorInicial = 0
    let valorTotal = 0
    for(let i = 1; i <= 52; i++) {
        valorInicial = valorInicial + 2
        valorTotal = valorTotal + valorInicial
        obj = {
            numero: i,
            valor: valorInicial,
            acumulado: valorTotal
        }
        arr.push(obj)
    }
    return arr
}

console.log(desafio())