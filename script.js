const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pid = document.querySelector("#result");

btn.addEventListener("click", btnOnclick);

function btnOnclick (){
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const number1 = parseInt(valorInput1);
    const number2 = parseInt(valorInput2);
    const sumaInput = number1 + number2;
    pid.innerText = "Resultado " + sumaInput;
    
}







