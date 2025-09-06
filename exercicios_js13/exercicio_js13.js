let num1 = parseInt(prompt("Digite o primeiro número: "))
        let num2 = parseInt(prompt("Digite o segundo número: "))
        let mult = num1 % num2 
        
        if (mult == 0){
            document.write("Sim, o " + num1 + " é sim um número multiplo de " + num2)
        }else{
            document.write("Não, o " + num1 + " não é um número multiplo de " + num2)
        }
        
