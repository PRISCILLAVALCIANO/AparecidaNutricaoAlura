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

    var pesoValido = validaPeso(peso); // true ou false
    var alturaValida = validaAltura(altura); //true ou false
        

    //Validando campos de peso e altura de

    if(!pesoValido) {
        console.log("Peso inválido, revise o cadastro!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida) {
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

function validaPeso(peso){
    if(peso > 0 && peso <= 200){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 2.20){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



