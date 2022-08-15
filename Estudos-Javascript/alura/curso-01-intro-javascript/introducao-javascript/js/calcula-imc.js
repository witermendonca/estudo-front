/*var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');

var altura = tdAltura.textContent;

var peso = tdPeso.textContent;

var imc = peso / (altura * altura);


console.log(imc);

var tdImc = paciente.querySelector('.info-imc');

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

if(peso <=0 || peso >= 1000) {
    pesoEhValido = false;
    tdPeso.textContent = 'peso inválido';
 }
 
 if(altura <= 0 || altura >= 3.00) {
   alturaEhValida = false;
   tdAltura.textContent = 'altura inválida';
 }
 
 if(pesoEhValido && alturaEhValida) {
    var imc = peso / ( altura * altura);
    tdImc.textContent = imc; 
 } else{
    tdImc.textContent = "Altura e/ou peso inválidos!";
 }

 */

 //obtendo acesso as tr class paciente pelo DOM.
var pacientes = document.querySelectorAll('.paciente');

console.log(pacientes);

//Percorrendo todas tr pacientes.
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');

    var altura = tdAltura.textContent;

    var peso = tdPeso.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (pesoEhValido) {
        tdPeso.textContent = 'peso inválido';
        paciente.classList.add('paciente-invalido'); //adicionando class de costumização.
    }

    if (alturaEhValida) {
        tdAltura.textContent = 'altura inválida';
        paciente.classList.add('paciente-invalido'); //manipulando class de costumização.
    }

    if (!pesoEhValido && !alturaEhValida) {
        var imc = calculadoraImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = 'Altura e/ou peso inválidos!';
    }
}

