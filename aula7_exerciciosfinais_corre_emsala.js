//Números pares com for
//peça ao usuário um número e mostre todos os números pares de 1 até ele:

let numero4 = parseInt(prompt("Digitr um número:"))
for (let i = 2; i <= numero4; i += 2){
    
 console.log(i);
    
}

// Fatorial com While:
// Peça ao usuário um número e calcule o fatorial dele

let numero5 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
let i = 1;
while (i <= numero5){
    fatorial *= i;
    i++;
} 
console.log(`Fatorial de ${numero5}: ${fatorial}`);

//Validação com Do While:
//Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

let numero6; 
do{
    numero6 = parseInt(prompt("Digite um número maior que 10"));
} while (numero6 <= 10);
console.log("Número válido" , numero6);