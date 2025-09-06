//Aqui começa o exercício número 5...

        var preco = parseFloat(prompt("Qual o preço do produto?"))
        var quantidade = parseFloat(prompt("Qual a quantidade?"))


        if(quantidade >=10){
            var desconto = (preco * quantidade * 0.10)
            var total = (preco * quantidade) - desconto
            document.write("O total a ser pago é: " + total + "<br>")
        }else{
            var total = (preco * quantidade)
            document.write("O total a ser pago é: " + total + "<br>")
        }

        //Aqui termina o exercício número 5...