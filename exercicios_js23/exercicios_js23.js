 let mes = (prompt("Escolha um mês"))

        let mesescom31 = ["Janeiro", "Março", "Maio", "Julho", "Agosto", "Outubro", "Dezembro"]
        let mesescom30 = ["Abril", "Junho", "Setembro", "Novembro"]
        let mesescom28 = ["Fevereiro"]

        if( mesescom31.includes(mes) ){
            document.write(mes + ( " possue 31 dias"))
        }else if ( mesescom30.includes(mes) ){
            document.write(mes + ( " possue 30 dias"))
        }else if ( mesescom28.includes(mes)){
            document.write(mes + ( " possue 28 dias"))
        }else{
            alert.write("Mês inválido, tente novamente...")
        }