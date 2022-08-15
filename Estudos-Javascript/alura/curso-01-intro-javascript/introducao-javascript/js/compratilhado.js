function calculadoraImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    return imc.toFixed(2); //limita casas decimais.
}

function validaPeso(peso){
    if (peso <= 0 || peso >= 1000) {
       return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura <= 0 || altura >= 3.00) {
       return true;
    }else{
        return false;
    }
}