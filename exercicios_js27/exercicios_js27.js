var idade = parseInt(prompt("Digite sua idade: "))
        var sexo = String(prompt("Você é Homem ou Mulher?"))

        if(idade >= 65 && sexo == "Homem"){
            document.write("Você já pode se apostar!")
        }else if (idade < 65 && sexo == "Homem"){
            document.write("Infelizmente você ainda não pode se aposentar...")
        }else if(idade >= 60 && sexo == "Mulher"){
            document.write("Você já pode se aposentar!")
        }else if(idade < 60 && sexo == "Mulher"){
            document.write("Infelizmente você ainda não pode se aposentar...")
        }else("Algumas das informações estão incorretas...")