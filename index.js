function contarRegressivamente() {
    let numero = document.getElementById('numero').value;

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = "Coloque um numero valido.";
    }

    let intervalo = setInterval(function() {
        document.getElementById('resultado').innerText = numero;
    
     if (numero <= 0) {
         clearInterval(intervalo);
         document.getElementById('resultado').innerText = "Tempo Esgotado!";
    
        }
    
        numero--;
        
    }, 1000);


}
