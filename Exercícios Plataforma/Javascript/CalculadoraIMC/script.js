var peso;
var altura;
var resultado;
var imc;



function calcular(event) {
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;


    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if (imc < 17) {

        resultado.innerHTML = 'Seu Índice de Massa Corporal atual é ' + imc.toFixed(2) +
            " </br> Você está muito magro";
    }
    else if (imc > 17 && imc <= 18.5) {
        resultado.innerHTML = 'Seu IMC atual é ' + imc.toFixed(2) + ' </br> Você está abaixo do peso ideal.'
    }
    else if (imc > 18.51 && imc <= 24.5) {
        resultado.innerHTML = 'Seu IMC atual é ' + imc.toFixed(2) + ' </br> Parabéns. Você está no peso ideal!'
    }
    else {
        resultado.innerHTML = 'Seu IMC atual é ' + imc.toFixed(2) + ' </br> Melhor começar a se cuidar.'
    }





}