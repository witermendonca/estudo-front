/*var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); //previne evento default 

    var form = document.querySelector('#form-adicionar'); //acesso ao form

    //extrai informações do form.
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;


    console.log(nome, peso, altura, gordura);

    //criando elementos html.
    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculadoraImc(peso, altura);

    //colocando uma tag dentro da outra, como filho.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

})
*/

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); //previne evento default 

    var form = document.querySelector('#form-adicionar'); //acesso ao form

    //extrai informações do form.
    var paciente = obtemInfoForm(form);

    var erro = validaPaciente(paciente);
    var messageErro = document.querySelector('#msg-erro');

    if (erro.length > 0) {
        messageErro.textContent = erro;
        return;
    }
    //criando elementos html.
    var pacienteTr = montaTr(paciente);

    //insere elementos na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    messageErro.innerHTML = '';
    form.reset();

})


function obtemInfoForm(form) {

    //objeto no javascript.
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculadoraImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'info-peso');
    var alturaTd = montaTd(paciente.altura, 'info-altura');
    var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    var imcTd = montaTd(paciente.imc, 'info-imc');

    //colocando uma tag dentro da outra, como filho.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var pesoValido = validaPeso(paciente.peso);
    var alturaValida = validaAltura(paciente.altura);

    var erro = [];

    if (paciente.nome == 0) {
        console.log('Nome não pode ser em branco');
        document.querySelector('#nome').classList.add('campo-invalido');
        document.querySelector('#nome-label').textContent = 'Nome: não pode ser em branco';
        erro.push('Nome não pode ser em branco');
    } else {
        document.querySelector('#nome-label').innerHTML = 'Nome:';
        document.querySelector('#nome').classList.remove('campo-invalido');
    }
    if (pesoValido) {
        console.log('Peso Inválido');
        document.querySelector('#peso').classList.add('campo-invalido');
        document.querySelector('#peso-label').textContent = 'Peso: Inválido';
        erro.push('Peso Inválido');
    } else {
        document.querySelector('#peso-label').textContent = 'Peso:';
        document.querySelector('#peso').classList.remove('campo-invalido');
    }
    if (alturaValida) {
        console.log('Altura Inválida');
        document.querySelector('#altura').classList.add('campo-invalido');
        document.querySelector('#altura-label').textContent = 'Altura: Inválido';
        erro.push('Altura Inválida');
    } else {
        document.querySelector('#altura-label').textContent = 'Altura:';
        document.querySelector('#altura').classList.remove('campo-invalido');
    }
    if (paciente.gordura == 0) {
        console.log('Percentual de gordura não pode ser em branco');
        document.querySelector('#gordura').classList.add('campo-invalido');
        document.querySelector('#gordura-label').textContent = 'Gordura: não pode ser em branco';
        erro.push('Gordura não pode ser em branco');
    } else {
        document.querySelector('#gordura-label').innerHTML = 'Gordura:';
        document.querySelector('#gordura').classList.remove('campo-invalido');
    }
    return erro;

}
