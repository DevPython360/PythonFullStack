## 1: Calculo de deconto em uma loja - melhoria: adição do input para solicitar algo ao usurário:

preco = float(input ("Digite o preço:"))
print ("Preço:" , preco)
desconto = float(input ("Digite o valor do desconto:"))
preco_final = (preco * desconto / 100)
print ("O desconto é de:" , preco_final)

## 2: Cáuculo de IMC (índice de Massa corporea) - Melhoria: adição do input para solicitar algo ao usuário

peso = float(input("Digite o seu peso: "))
print("Peso:", peso)
altura = float(input("Digite sua altura: "))
print("Altura:", altura)
# Calculando o IMC e arredondando para 2 casas decimais:
imc = round(peso / (altura ** 2), 2)
print("Seu IMC é:", imc)

## 3: Verificação de elegibilidade com valores booleanos com a adição do input para interação com o usuário:

idade = int(input("Digite Sua idade:"))
tem_experiencia = str(input("Digite sim caso tenha esperiência e não caso não tiver:"))
tem_experiencia = True
elegivel_para_concurso = idade >= 18 and tem_experiencia
print ('É elegível:', elegivel_para_concurso)

## 4: Classificação de de Níveis de acesso com estruturas condicionais com mensagem de erro caso o usuário digite um valor não disponível:

nivel_acesso = int(input('Informe Seu Nivel:'))

if nivel_acesso == 3: 
   print('Acesso Total')
elif nivel_acesso == 2:
    print('Acesso Parcial')
else: 
    print ('Digite um valor válido')

## 5:Conversão de graus celsius em fahrenheit:
grau_celsius = float(input("Digite o grau atual:"))
print ('Conversão para fahrenheit' , grau_celsius * 9/5 + 32)

## 6. Verificação de Números Pares e Ímpares:
## Declare uma variável numero com um valor inteiro,
## Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado:

numero = int(input('Digite um número:'))
if (numero % 2 == 0):
    print("O número é par")
else:
    print("O número é ímpar")

##7. Cálculo de Frete com Base no Peso:
## Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:
## Peso até 5 kg: R$ 10.00
## Peso entre 5 kg e 10 kg: R$ 20.00
##Peso acima de 10 kg: R$ 30.00
##Imprima o valor do frete.

peso = float(input(' Digite um número'))
if peso <= 5:
    frete = 10.0
elif peso <= 10:
    frete = 20.0
else:
    frete = 30.0
print("Valor do frete:", frete)






