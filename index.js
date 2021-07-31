function translateImc(imc){
    if (isNaN(imc)) return 'Erro no imc, não numerico';

    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30) return 'sobrepeso';

    return 'obesidade';

}

function calculoImc(){
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    var imc = peso/(altura*altura);
    
    document.getElementById('textImc').innerHTML = parseFloat(imc).toFixed(2) + ' ' + translateImc(imc);
}