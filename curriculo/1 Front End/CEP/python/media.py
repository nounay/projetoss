#entrada de dados
from xml.dom.minidom import Notation


nota1 = float(input("Nota 1:"))
nota2 = float(input("Nota 2:"))
nota3 = float(input("Nota 3:"))
nota4 = float(input("Nota 4:"))


#prossesamento de dados
media =  (nota1 + nota2 +  nota3 + nota4) /4 


print (media)
 
if media < 60:
    print('Reprovado')
elif media < 70 :
    print('Resultado Mediano')
elif media < 80:
    print('Muito Bom')
else:  
    print('Excelente')
    
    

    