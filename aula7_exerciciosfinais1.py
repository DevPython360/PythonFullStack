##Números pares com for
##peça ao usuário um número e mostre todos os números pares de 1 até ele:

numero = int(input("Digite um número: "))

for i in range(2, numero+1, 2):
    print(i)

## Fatorial com While:
## Peça ao usuário um número e calcule o fatorial dele

numero = int(input("Digite um número: "))

fatorial = 1
for i in range(1, numero + 1):
    fatorial *= i

print(f"O fatorial de {numero} é {fatorial}")

##Validação com Do While:
##Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

numero = 0
while True:
    numero = input("Digite um número maior que 10: ")
    if numero.isdigit() and int(numero) > 10:
        numero = int(numero)
        break
    print("Número inválido. Tente novamente.")
