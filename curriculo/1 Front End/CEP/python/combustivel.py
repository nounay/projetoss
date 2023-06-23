precoAlcool = float(input("Insira o valor do alccol:"))
precoGasolina = float(input("Insira o valor da Gasolina:"))

resultado = precoAlcool / precoGasolina 
4
print(resultado)

if resultado > 0.7:
    print("Abasteça com Gasolina")
else:
    print("Abasteça com Alcool")
