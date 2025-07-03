let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let botaoMais = document.getElementById('somarBtn');
let botaoMenos = document.getElementById('subtrairBtn');
let botaoVezes = document.getElementById('multiplicarBtn');
let botaoBarra = document.getElementById('dividirBtn');
let botaoClear = document.getElementById('clearBtn');
let resultado = document.getElementById('resultado');


botaoMais.addEventListener('click', function () {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = 'Digite dois números válidos.';
    
  } else {
    const soma = valor1 + valor2;
    resultado.textContent = `Resultado: ${soma}`;
    
  }
});
botaoMenos.addEventListener('click', function () {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = 'Digite dois números válidos.';
    
  } else {
    const resto = valor1 - valor2;
    resultado.textContent = `Resultado: ${resto}`;
    
  }
});
botaoVezes.addEventListener('click', function () {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = 'Digite dois números válidos.';
    
  } else {
    const produto = valor1 * valor2;
    resultado.textContent = `Resultado: ${produto}`;
    
  }
});
botaoBarra.addEventListener('click', function () {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = 'Digite dois números válidos.';
    
  } else {
    const quociente = Math.round((valor1 / valor2)*100)/100;
    resultado.textContent = `Resultado: ${quociente}`;
    
  }
});
botaoClear.addEventListener('click',function(){
    input1.value = ''
    input2.value = ''
    resultado.textContent = ''
})
