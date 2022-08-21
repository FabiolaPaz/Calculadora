let prompt = require('prompt-sync')();


function calculadora(valor1, valor2, operador) {
    switch (operador) {
        case '+':
            let soma = valor1 + valor2
            console.log(`O resultado da soma é: ${soma}`)
            break;

        case '-':
            let subtr = valor1 - valor2
            console.log(`O resultado da subtração é: ${subtr}`)
            break;

        case '*':
            let multi = valor1 * valor2
            console.log(`O resultado da multiplicação é: ${multi}`)
            break;

        case '/':
            let restante = valor1 % valor2
            if (restante != 0){
                let divis = parseInt(valor1 / valor2)
                console.log(`O resultado da divião é ${divis} restando ${restante}`)
            } else {
                let divis = valor1 / valor2 
                console.log(`O resultado da sua divisão é ${divis}`)
            }
            break;
    }
}

let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite segundo valor: "))
let operador = prompt("Digite o símbolo aritimético no qual deseja: ")

calculadora(valor1,valor2,operador)

