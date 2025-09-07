let idade = parseInt(prompt("Digite sua idade: "))

        if (idade >= 18 && idade <= 70){
            document.write("VOTO OBRIGATÓRIO!")
        }else if (idade >= 16 && idade <= 18 ||idade > 70){
            document.write("Voto facultativo!")
        }
        

