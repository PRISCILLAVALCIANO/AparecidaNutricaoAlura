//Adicionando mais pacientes na tabela

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);

    //Cria a tr e td do paciente
    
    var pacienteTr = montaTr(paciente);

    //Verifica se o paciente não for valido
    if(!validaPaciente(paciente)){
        console.log("Paciente inválido!");
        return;
    }
  

    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    //Limpar campos do formulario depois de adicionado
    form.reset();
});

//Essa função vai obter os dados que usuário preencher no formulário
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
//Essa função receberá os dados do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Essa funçao preenchera os dados na planilha e as classes
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//Essa função valida as informações preenchidas no form
function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else {
        return false;
    }

}