let quantidade = parseInt(prompt("Quantas idades você vai digitar?"))
        let maiorIdade = 0
        let menorIdade = 0

        for(i = 0; i < quantidade; i++) {
            let idade = parseInt(prompt("Digite a idade"))
            if(idade < 18) {
                menorIdade += 1
            } else {
                maiorIdade += 1
            }
        }

        document.write("Temos " + menorIdade + " pessoas menores de idade e " + maiorIdade + " pessoas maiores de idade")