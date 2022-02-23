'use strict'

const numeros = [20, 70, 131, 279, 320]

// Acrescentar 100 a cada elemento 

// Solução Imperativa

// const limite = numeros.length - 1
// let numeros100 = []
// for (let i=0; i<=limite; i++){
//     numeros100[i] = numeros[1] + 100
// }

// ----- Solução Declarativa -----
// MAP - Percorre o array podendo modificar ou não e retornando um novo array de mesmo tamanho
// 1° Elemento
// 2° Índice
// 3° Array

// const adicionar100 = (numero) => numero + 100
// const numeros100 = numeros.map(adicionar100)

// console.log("numeros:", numeros)
// console.log("numeros mais 100:", numeros100)

// PROBLEMA - criar um novo array com o numeros menores que 100
// const limite = numeros.length 
// let numerosMenores100 = []
// for (let i=0; i<=limite; i++){
//    if(numeros[i]<=100){
//        numerosMenores100[i] = numeros[i];
//        i++;
//    }
// }


// const ehmenor100 = (numero) => numero<=100
// const numeroMenores100 = numeros.filter (ehmenor100)

// console.log ("Números menores que 100", numeroMenores100)

// PROBLEMA - Somar todos os valores (elementos)
// REDUCE - Percorre todo o array aplicando um função (callback)
// const limite = numeros.length - 1
// let total = 0;
// for(let i=0; i<=limite; i++){
//     total+= numeros[i]
// }

// // 1° - Acumulador
// // 2° - Elemento (valor)
// // 3° - Índice
// // 4° - Array 

// const soma = (a,b) => a + b
// const total = numeros.reduce(soma, 0)

// 1) Criar um novo array com os valores ao quadrado.
const limite = numeros.length 

const numeroQuadrado = (numero) => numero * numero
const numerosAoQuadrado = numeros.map(numeroQuadrado)
console.log("Valores ao quadrado: " + numerosAoQuadrado)

// 2) Criar um novo array com os valores pares

const numeroPar = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(numeroPar)
console.log("Números pares: " + numerosPares)


// 3) Calcular a média dos valores

const somar = (a,b) => a + b
const media = numeros.reduce(somar, 0) / numeros.length
console.log("Média dos valores: " + media)

// 4) Calcular a soma dos valores ímpares

const numeroImpar = (numero) => numero % 2 == 1
const numerosImpares = numeros.filter(numeroImpar) 
const somaDeImpares = numerosImpares.reduce(somar,0)
console.log("Soma dos valores ímpares: " + somaDeImpares)
 

// 5) Calcular o valor Total, sabendo que cada valor teve 20% de desconto

const total = numeros.reduce(somar, 0)
const desconto = numeros.reduce(somar) * 0.2
const valorTotalDesconto = total - desconto
console.log("Valor total de desconto: " + valorTotalDesconto)