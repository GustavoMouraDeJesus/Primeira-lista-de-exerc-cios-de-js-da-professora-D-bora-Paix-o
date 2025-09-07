let nome = parseFloat(prompt("Qual seu nome?"))
        let materia = String(prompt("Qual a matéria?"))
        let nota = parseFloat(prompt("Qual a sua nota?"))

        if(nota >= 7){
            document.write("Parabéns, você esta aprovado!")
        }else(document.write("Você está de recuperação, não desanime, ainda dá para recuperar..."))