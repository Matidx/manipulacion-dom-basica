const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');

const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}