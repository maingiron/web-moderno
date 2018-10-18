// function declaration pode ser chamada antes dela ser criada
console.log(soma(3, 4))

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x , y) {
    return x - y
}

// function expression só pode ser chamada depois dela ser criada
console.log(sub(3, 4))

// named function expression
const mult = function mult (x, y) {
    return x * y
}

// function expression só pode ser chamada depois dela criada
console.log(mult(3, 4))