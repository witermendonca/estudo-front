const users = ['Ana', 'John', 'Mary', 'Pedro'];

//Enum
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}


const persons = [
    {
        name: 'John',
        age: 40,
        gender: gender.MAN
    },
    {
        name: 'Ana',
        age: 30,
        gender: gender.WOMAN
    },
    {
        name: 'Mary',
        age: 24,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 60,
        gender: gender.MAN
    }

]

//retorna a quantidade de itens do array
console.log(persons.length)

//Verifica se é array
console.log(Array.isArray(persons))

//Interar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Name: ${person.name}, index: ${index}`, arr)
})

//Filtra array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('Lista de Homens: ', mens)

//retorna um novo
const personsWithCourses = persons.map(person => {
    person.course = 'Introdução ao JavaScript'
    return person
})

console.log(personsWithCourses)

//personsWithCourses.forEach(person => console.log(person))

//tranforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)
console.log(totalAge)