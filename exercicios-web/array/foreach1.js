const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Esses são os 3 params oficiais
aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)