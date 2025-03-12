## Calculo de deconto em uma loja:

preco = 150.0
desconto = 20
print ('subtração:' , preco - desconto)
print ('Divisão:' , 130 / 150.0)
print ('O Desconto é:' , 0.867 * 100)

## Cáuculo de IMC (índice de Massa corporea):

peso = 70
Altura = 1.75
indicie_massa= ("Resultado do IMC:" , 70 / 1.75)
print (indicie_massa)

## Verificação de elegibilidade com valores booleanos:

idade = 22
tem_experiencia = True
elegivel_para_concurso = idade >= 18 and tem_experiencia
print ('É elegível:', elegivel_para_concurso)

## Classificação de de Níveis de acesso com estruturas condicionais:

nivel_acesso = int(input('Informe Seu Nivel'))

if nivel_acesso == 3: 
   print('Acesso Total')
elif nivel_acesso == 2:
    print('Acesso Parcial')
else: 
    print ('Acesso Restrito')

## Conversão de graus celsius em fahrenheit:

celsius = 70
print ('Conversão para fahrenheit' , 70 * 9/5 + 32)

'''6. Verificação de Números Pares e Ímpares:
Declare uma variável numero com um valor inteiro. Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.'''

#Resolução:
numero = 7
if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")


'''7. Cálculo de Frete com Base no Peso
Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:

- Peso até 5 kg: R$ 10.00;
- Peso entre 5 kg e 10 kg: R$ 20.00;
= Peso acima de 10 kg: R$ 30.00;

Imprima o valor do frete.'''

#Resolução:
peso = 8
if peso <= 5:
    frete = 10.0
elif peso <= 10:
    frete = 20.0
else:
    frete = 30.0
print("Valor do frete:", frete)

############################################################
#                     FIM                                  #
############################################################






