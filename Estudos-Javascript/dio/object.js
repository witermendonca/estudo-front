let user = {
    name: 'Witer'
}

//Altera a propriedade de um objeto

user.name = 'Outro nome 1'
console.log(user.name)

user['name'] = 'Outro nome 2'

console.log(user['name'])

const prop = 'name'
user[prop] = 'Outro nome 3'
console.log(user.name)

//cria nova propriedade de um objeto
user.lastName = 'Mendonça'
console.log(user)

//deleta propriedade de um objeto
delete user['name']
console.log(user)

const user2 = {
    name: 'Witer',
    lastName: 'Mendonça'
}

//recupera as chaves de um objeto, retorna um array
console.log(Object.keys(user2)) //[ 'name', 'lastName' ]

//recupera os valoresde um objeto, retorna um array
console.log(Object.values(user2)) //[ 'Witer', 'Mendonça' ]

//retorna um array de arrays contendo [name_prop, valor_prop]
console.log(Object.entries(user2)) //[ [ 'name', 'Witer' ], [ 'lastName', 'Mendonça' ] ]

//mergea propriedades ao um objeto
console.log(Object.assign(user2, { fullName: 'Witer Mendonça' })) //[]{ name: 'Witer', lastName: 'Mendonça', fullName: 'Witer Mendonça' }

//cria outro objeto, recomendado
console.log(Object.assign({}, user2, { age: 30 }))//{name: 'Witer', lastName: 'Mendonça', fullName: 'Witer Mendonça',  age: 30}

console.log(user2)//{ name: 'Witer', lastName: 'Mendonça', fullName: 'Witer Mendonça' }

//previne todas as alterações em um objeto
const newObj = {foo: 'bar'}
Object.freeze(newObj)
console.log(newObj)// { foo: 'bar' }
newObj.foo = 'changes'
console.log(newObj)// { foo: 'bar' }
delete newObj.foo
console.log(newObj)// { foo: 'bar' }
newObj.bar = 'foo'
console.log(newObj)// { foo: 'bar' }


//permite apenas a alterações de propriedades existentes em um objeto
const person = {name: 'Pedro'}
Object.seal(person)
console.log(person)//{ name: 'Pedro' }

person.name = 'Witer'
console.log(person)//{ name: 'Witer' }

delete person.name
console.log(person)//{ name: 'Witer' }

person.age = 30
console.log(person)//{ name: 'Witer' }

