let altura = parseFloat(prompt("Qual seu altura?"))
        let peso = parseFloat(prompt("Qual a sua peso?"))
        let imc = peso / (altura * altura)

        document.write("Sua massa corporal e igual a: " + imc)