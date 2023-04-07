//# Exercício 2

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

/*```
O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
```*/

let num = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))
let quest = (num > num2)
let quest1 = (num === num2)
let num3 = num % num2
let quest2 = (num3 === 0)
let num4 = num2 % num
let quest3 = (num4 === 0)
console.log("O primeiro número é maior que o segundo?", quest)
console.log("O primeiro número é igual ao segundo? ", quest1)
console.log("O primeiro número é divisível pelo segundo? ", quest2)
console.log("O segundo número é divisível pelo primeiro? ", quest3)