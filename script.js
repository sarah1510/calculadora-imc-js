const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
// const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")
const nome = document.getElementById("nome")
// const mensagem = ''



function calcularImc() {
    if(nome.value !== '' && altura.value !== '' && peso.value !== ''){
    const imc = (parseFloat(peso.value) / parseFloat(altura.value ** 2) ).toFixed(1)

        if(imc <= 18.5){
            const mensagem =  "você está abaixo do peso"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        } else if (imc >= 18.5 && imc <= 24.9){
            const mensagem = "você está com o peso ideal. Parabéns!"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        } else if (imc >= 25.0 && imc <= 29.9){
            const mensagem = "você está acima do peso"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        } else if(imc >= 30.0  && imc <= 34.9){
            const mensagem = "você está com obesidade de grau I"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        } else if(imc >= 35.0  && imc <= 39.9){
            const mensagem ="você está com obesidade de grau II"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        } else {
            const mensagem = "você está com obesidade de grau III. Cuidado!"
            resultado.textContent = "Seu IMC é" + imc + " e " + mensagem 
        }
    
}else{

    alert("Você não preencheu todos os campos")
    }

}


    calcular.addEventListener("click", calcularImc)



// calcular.addEventListener("click", calcularImc)
