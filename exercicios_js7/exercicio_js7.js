let salario = parseFloat(prompt("Digite seu salario base: "))
        let comissao = (salario * 0.05)
        let salarioLiquido = (salario + comissao)
        document.write("Seu salario liquido é: " + salarioLiquido )