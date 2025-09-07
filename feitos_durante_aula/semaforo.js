let semaforo = prompt("Digite a cor do semáforo: ") 

        if(semaforo == "vermelho"){
            document.write("PARE!!!")
        }else if(semaforo == "amarelo"){
            document.write("Diminua a velocidade AGORA!!!")
        }else if(semaforo == "verde"){
            document.write("Pode acelerar meu filho, vai com tudo!")
        }else{
            document.write("ERRO!!! A cor do semáforo é inválida.")
        }