//For ,  While e Do While em Java 

// contagem regressiva com for
// Peça ao usuário um número e faça uma contagem regressiva

let numero1 = parseInt(prompt("Digite um número"))
for (let i = mumero1; i >= 0; i--) {
    console.log(i);
}

// 2. Soma de Números com WHILE:
//Peça ao usuário um número e some todos os números de 1 até ele.

let numero2 = parseInt(prompt("Digite um número para somar de 1 até ele"))
let soma = 0;
let indice = 1;
while (indice <= numero2){
    soma += indice;
    indice++;

}
console.log("soma:" , soma);

// 3. Tabuada com FOR: 
// Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

let numero3 = prompt("Digite um número")
let numeroint = parseInt(numero3)
for (let i = 1; i <= 10; i++){
    console.log(`${numeroint} x ${i} = ${numeroint * i}`);
}