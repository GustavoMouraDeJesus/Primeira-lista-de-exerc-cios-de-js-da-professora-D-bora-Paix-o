let aborte = parseFloat(prompt("Digite o aborte mensal: R$"))
        let Taxadejuros = parseFloat(prompt("Digite a taxa de juros (%)")).toFixed(2)
        let juros = aborte * (Taxadejuros / 100) * 12
        let total = aborte + juros

        document.write("O valor total da sua poupança é de: R$ " + total.toFixed(2))