var text = 'Texto para teste'

console.log(text)
console.log(`Quantidade de letras length: ${text.length}`)

console.log(`Array com as posições separadas pelo delimitador split: ${text.split('')}`)

console.log(`Substring de um valor replace: ${text.replace('Texto', 'txeT')}`)

console.log(`Ultima letra de uma string slice = -1: ${text.slice(-1)}`)

console.log(`slice = 0,-1: pega da primeira posição e tira a ultima: ${text.slice(0, -1)}`)

console.log(`Valor da segunda letra ate a ultima slice = 1: ${text.slice(1)}`)

console.log(`Valor das duas primeiras letras a partir da posição 0, slice = 0,2: ${text.slice(0, 2)}`)

console.log(`Valor das duas primeiras letras a partir da posição 0, substr = 0,2: ${text.substr(0, 2)}`)





