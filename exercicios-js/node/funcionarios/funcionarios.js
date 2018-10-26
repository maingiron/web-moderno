const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    // Minha solução... (Mesma solução usada pelo o professor)
    const somenteChineses = funcionario => funcionario.pais === 'China'
    const somenteMulheres = funcionario => funcionario.genero === 'F'
    const menorSalario = ((funcionarioMenorSalario, funcionario) => {
        return funcionarioMenorSalario.salario < funcionario.salario ? funcionarioMenorSalario : funcionario
    })

    const resultado = funcionarios.filter(somenteChineses).filter(somenteMulheres).reduce(menorSalario)
    console.log(resultado)

})

