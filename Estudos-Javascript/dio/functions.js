function fn(){
    return 'Code here'
}

const arrowFn = () => 'Code here arrow function'
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here arrow function 2'
}
console.log(arrowFn())
console.log(arrowFn2())

//Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)
