//Aqui começa o exercício número 4...

        alert ("Digite as notas com valores entre 0 e 10")

        let nota1 = parseFloat(prompt("Entre com a primeira nota: "))
        let nota2 = parseFloat(prompt("Entre com a segunda nota: "))
        let nota3 = parseFloat(prompt("Entre com a terceira nota: "))

        if (nota1 <= 0 || nota1 >= 10 || nota2 <= 0 || nota2 >= 10 || nota3 <= 0 || nota3 >= 10) {
            alert("Alguma das notas está com um valor menos que 0 ou maior que 10, por favor atualize a pagina e digite as notas novamente")
        }else{

            let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

            document.write("A média das notas é: " + media + "<br>")
        }

        //Aqui termina o exercício número 4...