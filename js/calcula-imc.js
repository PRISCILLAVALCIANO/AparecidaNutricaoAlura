var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";

// Obtentando os dados do peso e altura e calculando o IMC dos pacientes
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;
        

    //Validando campos de peso e altura de

    if(peso <= 0 || peso >= 1000) {
        console.log("Peso inválido, revise o cadastro!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 2.50) {
        console.log("Altura inválida, revise o cadastro!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



