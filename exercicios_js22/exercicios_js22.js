let salario = parseInt(prompt("Digite salario: "))
        let bonusmaximo = 0.10
        let bonusminimo = 0.05 
        

        if( salario >= 2000){
            document.write("Seu bonus foi de: " + (salario * bonusmaximo))
        }else {
            document.write("Seu bonus foi de: " + (salario * bonusminimo))
        }