let funcionario = parseFloat(prompt("Qual o seu salario atual?"))
        let minimo = parseFloat(prompt("Qual o salario minimo atual?"))
        let salariosminimos = (funcionario / minimo)

        document.write("O funcionario recebe aproximadamente R$ " + salariosminimos.toFixed(2))