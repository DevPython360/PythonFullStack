//Números pares com for
//peça ao usuário um número e mostre todos os números pares de 1 até ele:

let numero = parseInt(prompt("Digitr um número:"))
for (let i = 1; i <= numero; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Fatorial com While:
// Peça ao usuário um número e calcule o fatorial dele

let numero = parseInt(prompt("Digite um núemro:"))
let fatorial = 1
while (i <= numero){
    fatorial *= i;
    i++;
}
console.log("O fatorial é:" + numero + + fatorial)

//Validação com Do While:
//Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

do {
    numero = prompt("Digite um número maior que 10:");

    // Verifica se a entrada é um número e se é maior que 10
    if (numero > 10 && numero == Number(numero)) {
        console.log(`Você digitou ${numero}, válido!`);
    } else {
        console.log("Número inválido. Tente novamente.");
    }
} while (numero <= 10 || numero != Number(numero));