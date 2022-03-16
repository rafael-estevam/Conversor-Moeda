var moeda = atualizaMoeda();
var elemento = document.getElementById("valor");


function atualizaMoeda(){
  let select = document.querySelector("#seletorMoeda");
  let opçãoMoeda = select.options[select.selectedIndex];

  moeda = opçãoMoeda.value;
  return moeda;
}

function Converter(){

  switch (moeda) {
    case "1": converterUs(); break;
    case "2": converterEu(); break;
    case "3": converterGb(); break;
  }
}

function converterUs() {
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