function converterUs() {
  var elemento = document.getElementById("valor");
  var input = parseFloat(elemento.value);

  var output = input / 5.1;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits:2,
  })

  document.getElementById("valorConvertido").value=formatter.format(output);
}

function converterEu() {
  var elemento = document.getElementById("valor");
  var input = parseFloat(elemento.value);

  var output = input / 5.6;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"EUR",
    minimumFractionDigits:2,
  })

  document.getElementById("valorConvertido").value=formatter.format(output);
}

function converterGb() {
  var elemento = document.getElementById("valor");
  var input = parseFloat(elemento.value);

  var output = input / 6.7;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"GBP",
    minimumFractionDigits:2,
  })

  document.getElementById("valorConvertido").value=formatter.format(output);
}

function Limpar (){
  document. location. reload()
}