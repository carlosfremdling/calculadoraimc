const button = document.getElementById("btn-calcular");

  


button.addEventListener("click", () => {
  const peso = document.getElementById("peso");
  //const altura = document.getElementById("altura");
  $('#altura').mask('0.00');
  const altura = $('#altura').val();
  console.log(altura);
  const span = document.getElementById("imc-result");

  if ((peso.value == "") || (altura == "")) {
    alert("Informe um peso e uma altura para continuar o cálculo do IMC!");
  } else {
    let resultado = (parseFloat(peso.value) / Math.pow(parseFloat(altura), 2));
    peso.value = "";
    $("#altura").val("");
 
  if (resultado < 18.5) {
    span.innerHTML = `Seu IMC é ${resultado.toFixed(2)} - Abaixo do Peso`;
    span.classList.add('danger');
    if (span.classList.contains('success')) {
      span.classList.remove('success');
    }
    if (span.classList.contains('warning')) {
      span.classList.remove('warning');
    }

  } else {
    if (resultado >= 18.5 && resultado <= 24.9) {
      span.innerHTML = `Seu IMC é ${resultado.toFixed(2)}  - Peso Normal`;
      span.classList.add('success');
      if (span.classList.contains('danger')) {
        span.classList.remove('danger');
      }
      if (span.classList.contains('warning')) {
        span.classList.remove('warning');
      }
    } else {
      if (resultado >= 25 && resultado <= 29.9) {
        span.innerHTML = `Seu IMC é ${resultado.toFixed(2)}   - Sobrepeso`;
        span.classList.add('warning');
        if (span.classList.contains('success')) {
          span.classList.remove('success');
        }
        if (span.classList.contains('danger')) {
          span.classList.remove('danger');
        }
      } else {
        if (resultado >= 30 && resultado <= 34.9) {
          span.innerHTML =
            `Seu IMC é ${resultado.toFixed(2)} - Obesidade Grau I`;
            span.classList.add('danger');
            if (span.classList.contains('success')) {
              span.classList.remove('success');
            }
            if (span.classList.contains('warning')) {
              span.classList.remove('warning');
            }
        } else {
          if (resultado >= 35 && resultado <= 39.9) {
            span.innerHTML =
              `Seu IMC é ${resultado.toFixed(2)} - Obesidade Grau II`;
              span.classList.add('danger');
              if (span.classList.contains('success')) {
                span.classList.remove('success');
              }
              if (span.classList.contains('warning')) {
                span.classList.remove('warning');
              }
          } else {
            if (resultado >= 40) {
              span.innerHTML =
                `Seu IMC é ${resultado.toFixed(2)} - Obesidade Grau III`;
                span.classList.add('danger');
                if (span.classList.contains('success')) {
                  span.classList.remove('success');
                }
                if (span.classList.contains('warning')) {
                  span.classList.remove('warning');
                }
            }
          }
        }
      }
    }
  }
}
});

