let macas = parseFloat(prompt("Qual a quantidade de maças compradas?"))
        var varejo = (macas * 0.50)
        var atacado = (macas * 0.40)
        

        if(macas < 12){
            document.write("O preço total a ser pago é de: R$ " + varejo.toFixed(2))
        }else if(macas >= 12){
            document.write("O preço total a ser pago é de: R$ " + atacado.toFixed(2))
        }else(document.write("Alguma informação encontrasse incorreta, revise e tente novamente."))
