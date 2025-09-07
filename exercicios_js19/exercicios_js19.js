let nota1 = parseInt(prompt("Digite sua primeira nota: "))
        let nota2 = parseInt(prompt("Digite sua segunda nota: "))
        let nota3 = parseInt(prompt("Digite sua terceira nota: "))

        let media = (nota1 + nota2 + nota3)/ 3

        if( media >= 7){
            document.write("PARABÉNS, você foi aprovado!!!")
        }else{
            document.write("Você foi reprovado, estude mais e tente novamente...")
        }