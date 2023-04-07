/*# Exercício 3

### Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/
/*```

### Parte 2

Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 
e possui 2 filhos.
 Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10%
  sobre o total de vendas no mês e entrou na empresa em 2019.**

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário

Calcule:

1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o
     cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em
     consideração o salário + porcentagem de vendas)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos
     somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)*/


const operacao1 = (5 > 20) && (5 < 2)
const operacao2 = (5 === 5) || (5 === "5")
const operação3 = !(20 > 50)
const operação4 = !((20 > 50) || (50 > 60))
console.log(operacao1)
console.log(operacao2)
console.log(operação3)
console.log(operação4)

// Parte 2

let sal = 2000
const aux = 45.5
const com = 0.1
const inss = (0.05)
const jan = 5784.50
const fev = 3418.41
const mar = 4124.10
const abr = 1874
const maio = 7000
const jun = 9450


let quest = sal + (2 * aux)
console.log(quest)
let quest2 = com * jan
console.log(quest2)
let quest3 = (sal + (com * jan)) * inss
console.log(quest3.toFixed(2))
let quest4 = ((jan + fev + mar + abr + maio + jun) * com + ((2000 * 6) + (aux * 2 * 6))) - ((jan + fev + mar + abr + maio + jun) * com + ((2000 * 6) + (aux * 2 * 6))) * inss
console.log(quest4.toFixed(2))
let med = ((jan + fev + mar + abr + maio + jun) * com + ((2000 * 6) + (aux * 2 * 6))) / 6
let quest5 = med
console.log(quest5.toFixed(2))



