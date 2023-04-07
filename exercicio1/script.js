//# Exercício 1

//Construa um programa que:

//a) Peça ao usuário que insira um número **par**
let num = prompt("Escreva um número par: ")

//b) Imprima no console **o resto da divisão** desse número por 2.
num %= 2
console.log(num)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Toda divisão de um número par por 2 dará resto zero.

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
// Dará sempre resto 1 pois qualquer resto > que 1 seria psssível de divisão

//>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número