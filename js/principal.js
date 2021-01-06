var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";

// Obtentando os dados do peso e altura e calculando o IMC do primeiro paciente
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

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
        tdImc.textContent = "Peso inválido!"
    }

    if(altura <= 0 || altura >= 2.50) {
        console.log("Altura inválida, revise o cadastro!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!"
    }

    if(pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

