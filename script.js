const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = dcument.getElementById("calcular")
const resultado = document.getElementById("resultado")

function calcularImc() {
    const imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)
    resultado.textContent = imc
} 


// calcular.addEventListener("click", calcularImc)

