## For ,  While e Do While e, python 

# 1. Contagem Regressiva com FOR:
# Peça ao usuário um número e faça uma contagem regressiva a partir dele até 0.


numero = int(input("Digite um número para a contagem regressiva:"))
for i in range(numero , -1, -1):
    print(i)
    

# 2. Soma de Números com WHILE:
# Peça ao usuário um número e some todos os números de 1 até ele.

numero1 = int(input("Dgite um número para somar de 1 até ele:"))
soma = 0
i = 1
while i <= numero1:
    soma += i
    i += 1
print("Soma:" ,  soma)


# 3. Tabuada com FOR:
# Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

numero = int(input("Digite um número: "))
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")