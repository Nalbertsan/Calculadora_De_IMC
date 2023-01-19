function main() {
    // Código principal
    const conteiner = document.querySelector('.container');
    conteiner.querySelector('h1').innerHTML = 'Tabela IMC';
    function recebeEvento(event) {
        event.preventDefault();
        const peso = parseFloat(document.querySelector('#text1').value);
        const altura = parseFloat(document.querySelector('#text2').value);
        const imc = peso / (altura * altura);
        const resultado = document.querySelector('#imcResultado');
        let faixaIMC = '';
        if(imc < 18.5)
            faixaIMC = 'Abaixo do peso';
        else if(imc >= 18.5 && imc < 25)
            faixaIMC = 'Peso normal';
        else if(imc >= 25 && imc < 30)
            faixaIMC = 'Sobrepeso';
        else if(imc >= 30 && imc < 35)
            faixaIMC = 'Obesidade grau 1';
        else if(imc >= 35 && imc < 40)
            faixaIMC = 'Obesidade grau 2';
        else if(imc >= 40)
            faixaIMC = 'Obesidade grau 3';
        resultado.innerHTML =  `Seu IMC é: ${imc.toFixed(2)} (${faixaIMC})`;
    }
    conteiner.addEventListener('submit', recebeEvento);
}

main();