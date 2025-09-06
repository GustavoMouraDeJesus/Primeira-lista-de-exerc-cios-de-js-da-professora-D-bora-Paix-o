let ano = parseInt(prompt("Quantos anos você tem?"))
        let meses = parseInt(prompt("Quantos meses voce tem?"))
        let dias = parseInt(prompt("Quantos dias voce tem?"))

        let totalDias = (ano * 365) + (meses * 30) + dias

        document.write("Aproximadamente você tem " + totalDias + " dias de vida no total")
