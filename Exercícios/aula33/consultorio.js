let fila = []
let opcao = "";

do {
    let pacientes = ""
    for(let i = 0; i < fila.lenght; i++) {
        pacientes += (i + 1) + "- " + fila[i] + "\n"
    }

    opcao = prompt("Pacientes: \n" + pacientes +
    "\nEscolha uma ação:\n1- Novo Paciente\n2- Consultar Paciente\n3- Sair"
    )

    switch(opcao) {
        case "1": 
            let novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        
        case "2": 
            if(fila.lenght > 0){
                let pacienteConsultado = fila.shift()
                alert(pacienteConsultado + " Foi removido da fila.")
            }
            else {
                alert("Não há pacientes fila.")
            }
            break

        case "3": 
            "Encerrando..."
            break

        default:
            alert("Opção Invalida")
    }
} while(opcao !== "3")