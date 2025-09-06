let idade = parseInt(prompt("Digite sua idade: "))
    
        if (idade > 0 && idade <= 3) {
            document.write("A pessoa que tem essa idade é um bebê")
        }else if (idade > 3 && idade <= 13){
            document.write("Você é uma criança")
        }else if (idade >13 && idade < 18){
            document.write("Você é um adolescente")
        }else if (idade >=18 && idade < 60){
            document.write("Você é um adulto")
        }else{
            document.write("Você é uma pessoa idosa")
        }